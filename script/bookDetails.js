const API_KEY = 'AIzaSyAZSXaq2jKWgfLA5ONNg7YCgFiKq5CQihQ';

function displayBookDetails(book) {
    const title = book.volumeInfo.title || 'No title available';
    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors available';
    const description = book.volumeInfo.description || 'No description available';
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

    const bookTitles = document.getElementsByClassName("title-h1")
    for (let i = 0; i < bookTitles.length; i++) {
        bookTitles[i].textContent = title;
    }
    const bookAuthors = document.getElementBy("bookAuthors")
    bookAuthors.textContent = authors;
    const bookDescription = document.getElementById("bookDescription")
    bookDescription.textContent = description;
    const bookImg = document.getElementById('bookImg')
    bookImg.src = thumbnail;
    const colorBackground = document.querySelector(".content-book .hero")
    colorBackground.style.backgroundImage = `url(${thumbnail})`;
    // const headTitle = document.getElementById("headTitle")
    // headTitle.textContent = title;
    document.title = title;
}

const title = book.volumeInfo.title || 'No title available';
window.onload = function() {
    document.title = title;
};

function fetchBookFromApi(bookId) {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`)
        .then(response => response.json())
        .then(book => {
            // Update the book details with fresh data
            displayBookDetails(book);
            // Optionally update localStorage with fresh data
            localStorage.setItem('selectedBook', JSON.stringify(book));
            console.log('im in api');
        })
        .catch(error => console.error('Error fetching book from API:', error));
}

function loadBookDetails() {
    const book = JSON.parse(localStorage.getItem('selectedBook'));
    if (!book) {
        // Display cached book data from localStorage
        displayBookDetails(book);
        // Optionally fetch fresh data in the background
        fetchBookFromApi(book.id);
    } else {
        // If no data in localStorage, fetch from API directly
        const bookId = new URLSearchParams(window.location.search).get('id');
        if (bookId) {
            fetchBookFromApi(bookId);
        } else {
            document.getElementById('book-details').innerHTML = 'No book selected.';
        }
    }
}

loadBookDetails();

