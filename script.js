// Collection of books
let books = [];

// Load books from local storage
const loadBooks = () => {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
};

// Save books to local storage
const saveBooks = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

// Display books in the collection
const displayBooks = () => {
  const bookCollection = document.querySelector('#book-collection');
  bookCollection.innerHTML = '';
  for (const book of books) {
    const bookEl = document.createElement('div');
    bookEl.classList.add('book');
    bookEl.innerHTML = `
      <span>${book.title} <br> ${book.author}</span>
      <button data-index="${book.index}">Remove</button>
    `;
    bookCollection.appendChild(bookEl);
  }
};

// Add a book to the collection
const addBook = () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  books.push({
    index: books.length,
    title: title,
    author: author
  });
  saveBooks();
  displayBooks();
};

// Remove a book from the collection
const removeBook = (index) => {
  books = books.filter(book => book.index !== index);
  saveBooks();
  displayBooks();
};

// Handle "Add" button click
document.querySelector('#add-book').addEventListener('click', addBook);

// Handle "Remove" button click
document.querySelector('#book-collection').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    removeBook(parseInt(event.target.dataset.index));
  }
});

loadBooks
