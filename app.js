//Book Class: Represents a book

class Book {
  constructor(title, author, isbn, page) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.page = page;
  }
}

//UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
        page:"25"
      },
      {
        title: "Book Two",
        author: "John De",
        isbn: "34224434",
        page:"34"
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>${book.page}</td>
    <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
    
    
    `;

    list.appendChild(row);
  }
  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    //Vanish 3 sec
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#page").value = "";
  }
}



//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //Prevent acutal submit
  e.preventDefault();

  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  const page = document.querySelector("#page").value;

  //Validate
  if(title === '' || author === ''|| isbn === ''|| page === '') {
    UI.showAlert('Please fill in all fields', 'danger')

  }else {
    //Institate Book
  const book = new Book(title, author, isbn, page);

  //Add Book to UI
  UI.addBookToList(book);

  //Show success
  UI.showAlert('Book Added', 'success')

  //Clear fields
  UI.clearFields();
  }
  
  
});

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) =>{
  UI.deleteBook(e.target)

  //Show success
  UI.showAlert('Book Removed', 'success')
});
