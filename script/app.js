const API_KEY = 'AIzaSyAZSXaq2jKWgfLA5ONNg7YCgFiKq5CQihQ'; // Replace with your Google Books API key

async function searchBooks() {
    const query = document.getElementById('search-bar').value;
    if (!query) {
        alert('Please enter a search query');
        return;
    }
    
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
        const data = await response.json();
        displayBooks(data.items);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = ''; // Clear previous results

    books.forEach(book => {
        const bookElement = document.createElement('div');
        const title = book.volumeInfo.title || 'No title available';
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors available';
        const description = book.volumeInfo.description || 'No description available';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

        bookElement.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Authors:</strong> ${authors}</p>
            <p>${description}</p>
            ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : ''}
        `;
        booksList.appendChild(bookElement);
    });
}

// export default searchBooks();
