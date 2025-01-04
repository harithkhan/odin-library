const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title}, by ${this.author}, has ${this.pages} pages, and is ${this.isRead}`
    };
};

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

let book1 = new Book("How to Die", "H. Khan", 69, "not read");
let book2 = new Book("How to Die faster", "H. Khan", 42, "read")

addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);

