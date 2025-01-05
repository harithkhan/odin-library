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
let book2 = new Book("Emma", "Jane Austen", 274, "not read", "img/books/pride.png");
let book3 = new Book("Nusantara, A Sea of Tales","Heidi Shamsuddin", 223, "not read", "img/books/nusantara.png");
let book4 = new Book("Kristian Bell", "The Psychology of Slaying Dragons", 282, "not read", "img/books/dragons.png");
let book5 = new Book("Hong Kong Slang", "L. Varty & L. H. Yim", 115, "not read", "img/books/hkslang.png");
let book6 = new Book("How To Win At Chess", "Levy Rozman", 361, "read", "img/books/chess.png");
let book7 = new Book("Crime and Punishment", "Fyodor Dostoevsky", 642, "read", "img/books/crime.png");
let book8 = new Book("The Myth of Normal", "Gabor Mate", 563, "read", "img/books/mythofnormal.png");
let book9 = new Book("Nature, Man and Woman", "Alan Watts", 187, "not read", "img/books/nature.png");
let book10 = new Book( "$100m Offers", "Alex Hormozi", 231, "read", "img/books/100moffers.png");
let book11 = new Book("$100m Leads", "Alex Hormozi", 398, "read", "img/books/100mleads.png");
let book12 = new Book("Tufti The Priestess", "Vadim Zealand", 167, "read", "img/books/tufti.png");

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
        bookImg.setAttribute("class", "book-icon");
        let bookTitle = document.createElement("div");
        bookTitle.className = "book-title";
        bookTitle.textContent = `${book.title}`;
        let bookAuthor = document.createElement("div");
        bookAuthor.className = "book-author";
        bookAuthor.textContent = `${book.author}`;
        let pageNumber = document.createElement("div");
        pageNumber.className = "page-number";
        pageNumber.textContent = `${book.pages} pages`;

        let readIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        readIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        readIcon.setAttribute("viewBox", "0 0 24 24");
        readIcon.setAttribute("class", "read-icon");
        let readIconTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
        readIconTitle.textContent = "book-open-page-variant-outline";
        let readIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        readIconPath.setAttribute(
            "d",
            "M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
        );

        let whiteFiller = document.createElement("div");
        whiteFiller.className = "white-filler";

        readIcon.appendChild(readIconTitle);
        readIcon.appendChild(readIconPath);
        bookCard.appendChild(bookImg);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(pageNumber);
        bookCard.appendChild(readIcon);
        bookCard.appendChild(whiteFiller);
        library.appendChild(bookCard);
    }
};

displayLibrary();

