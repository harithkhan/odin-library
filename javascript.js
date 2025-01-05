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

let book1 = new Book("Emma", "Jane Austen", 495, "read");
let book2 = new Book("Emma", "Pride and Prejudice", 274, "not read");
let book3 = new Book("Heidi Shamsuddin", "Nusantara, A Sea of Tales", 223, "not read");
let book4 = new Book("Slaying Dragons", "Kristian Bell", 282, "not read");
let book5 = new Book("L. Varty & L. H. Yim", "Hong Kong Slang", 115, "not read");
let book6 = new Book("Levy Rozman", "How To Win At Chess", 361, "read");
let book7 = new Book("Fyodor Dostoevsky", "Crime and Punishment", 642, "read");
let book8 = new Book("Gabot Mate", "The Myth of Normal", 563, "read");
let book9 = new Book("Alan Watts", "Nature, Man and Woman", 187, "not read");
let book10 = new Book("Alex Hormozi", "$100m Offers", 231, "read");
let book11 = new Book("Alex Hormozi", "$100m Leads", 398, "read");
let book12 = new Book("Vadim Zealand", "Tufti The Priestess", 167, "read");

// Add default display books

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);
addBookToLibrary(book11);
addBookToLibrary(book12);
console.log(myLibrary);

