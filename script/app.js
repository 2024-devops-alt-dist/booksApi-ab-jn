const API_KEY = 'AIzaSyAZSXaq2jKWgfLA5ONNg7YCgFiKq5CQihQ'; // Replace with your Google Books API key

const searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click",searchBooks);


let results = 10;


async function searchBooks() {
    const query = document.getElementById('search-bar').value;
    if (!query) {
        alert('Please enter a search query');
        return;
    }    
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${results}&key=${API_KEY}`);
        const data = await response.json();
        displayBooks(data.items);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

function displayBooks(books) {
    console.log(books);
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = ''; // Clear previous results
    
    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('card-book');
        
        const title = book.volumeInfo.title || 'No title available';
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors available';
        const description = book.volumeInfo.description || 'No description available';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
        const bookId = book.id;

        bookElement.innerHTML = `

        <a href="./pages/book-page.html?id=${bookId}">
            <div class="card-book" style="background-image:url('${thumbnail}')">
                <div class="group-text">
                    <h3>${title}</h3>
                    <p class="p-card">${authors}</p>
                </div>
            </div>
        </a>
            
            `;
            booksList.appendChild(bookElement);
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    // Function to save the selected book data in localStorage
    function viewBookDetails(index) {
        console.log('hello localStorage')
        const books = JSON.parse(localStorage.getItem('books'));
        const selectedBook = books[index];
        localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
    }
    
    
    // <button onclick="viewBookDetails(${index})">View Details</button>