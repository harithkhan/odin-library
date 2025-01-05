const myLibrary = [];

function Book(title, author, pages, isRead, imgPath) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.imgPath = imgPath;
    this.info = function() {
        return `${this.title}, by ${this.author}, has ${this.pages} pages, and is ${this.isRead}`
    };
};

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

// Add default books to myLibary

let book1 = new Book("Emma", "Jane Austen", 495, "read", "img/books/emma.png");
let book2 = new Book("Emma", "Pride and Prejudice", 274, "not read", "img/books/pride.png");
let book3 = new Book("Heidi Shamsuddin", "Nusantara, A Sea of Tales", 223, "not read", "img/books/nusantara.png");
let book4 = new Book("The Psychology of Slaying Dragons", "Kristian Bell", 282, "not read", "img/books/dragons.png");
let book5 = new Book("L. Varty & L. H. Yim", "Hong Kong Slang", 115, "not read", "img/books/hkslang.png");
let book6 = new Book("Levy Rozman", "How To Win At Chess", 361, "read", "img/books/chess.png");
let book7 = new Book("Fyodor Dostoevsky", "Crime and Punishment", 642, "read", "img/books/crime.png");
let book8 = new Book("Gabot Mate", "The Myth of Normal", 563, "read", "img/books/mythofnormal.png");
let book9 = new Book("Alan Watts", "Nature, Man and Woman", 187, "not read", "img/books/nature.png");
let book10 = new Book("Alex Hormozi", "$100m Offers", 231, "read", "img/books/100moffers.png");
let book11 = new Book("Alex Hormozi", "$100m Leads", 398, "read", "img/books/100mleads.png");
let book12 = new Book("Vadim Zealand", "Tufti The Priestess", 167, "read", "img/books/tufti.png");

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

// Funtion to display library books

const library = document.querySelector(".library");
function displayLibrary() {
    library.innerHTML = ""; // Clear existing library
    for (let book of myLibrary) {
        let bookCard = document.createElement("div");
        bookCard.className = "book-card";
        let bookImg = document.createElement("img");
        bookImg.setAttribute("src", `${book.imgPath}`);
        bookImg.setAttribute("class", "book-icon")
        let bookTitle = document.createElement("div");
        bookTitle.className = "book-title";
        bookTitle.textContent = `${book.title}`;
        bookCard.appendChild(bookImg);
        bookCard.appendChild(bookTitle);
        library.appendChild(bookCard);
    }
};

displayLibrary();

