class Book {
    constructor(title, author, yearPublished, readStatus) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.readStatus = readStatus;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}. Status: ${this.readStatus ? 'Read' : 'Unread'}`;
    }
}

const library = [];
const bookList = document.getElementById('bookList');

document.getElementById('addBookBtn').addEventListener('click', addBook);
document.getElementById('removeLastBookBtn').addEventListener('click', removeLastBook);
document.getElementById('addBookToFrontBtn').addEventListener('click', addBookToFront);
document.getElementById('removeFirstBookBtn').addEventListener('click', removeFirstBook);

function renderBooks() {
    bookList.innerHTML = '';
    library.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.textContent = book.getSummary();
        bookList.appendChild(li);
    });
}

function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter author:');
    const yearPublished = prompt('Enter year published:');
    const readStatus = confirm('Has the book been read?');
    const book = new Book(title, author, yearPublished, readStatus);
    library.push(book);
    renderBooks();
}

function removeLastBook() {
    library.pop();
    renderBooks();
}

function addBookToFront() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter author:');
    const yearPublished = prompt('Enter year published:');
    const readStatus = confirm('Has the book been read?');
    const book = new Book(title, author, yearPublished, readStatus);
    library.unshift(book);
    renderBooks();
}

function removeFirstBook() {
    library.shift();
    renderBooks();
}

// Initial rendering of books
renderBooks();


  
  function getAllTitles() {
    const titles = library.map(book => book.title);
    displayOutput(titles);
  }
  
  
  
  function displayOutput(content) {
    const outputDiv = document.getElementById("output");
    if (typeof content === "string") {
      outputDiv.textContent = content;
    } else {
      outputDiv.textContent = JSON.stringify(content, null, 2);
    }
  }