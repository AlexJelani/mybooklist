//Book Class: Represents a book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
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
      },
      {
        title: "Book Two",
        author: "John De",
        isbn: "34224434",
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
    <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
    
    
    `;

    list.appendChild(row);
  }
}

//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) =>{

  //Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#title').value;
  const isbn = document.querySelector('#title').value;

});

//Event: Remove a Book