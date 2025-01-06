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
    this.toggleRead = function() {
        this.isRead = this.isRead === "read" ? this.isRead = "not read" : this.isRead = "read";
    };
};

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

// Add default books to myLibary

let book1 = new Book("Emma", "Jane Austen", 495, "read", "img/books/emma.png");
let book2 = new Book("Pride and Prejudice", "Jane Austen", 274, "not read", "img/books/pride.png");
let book3 = new Book("Nusantara, A Sea of Tales","Heidi Shamsuddin", 223, "not read", "img/books/nusantara.png");
let book4 = new Book("The Psychology of Slaying Dragons", "Kristian Bell", 282, "not read", "img/books/dragons.png");
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
        readIconTitle.textContent = "book-plus-outline";
        let readIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        readIconPath.setAttribute(
            "d",
            "M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"
        );

        let notReadIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        notReadIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        notReadIcon.setAttribute("viewBox", "0 0 24 24");
        notReadIcon.setAttribute("class", "not-read-icon");
        let notReadIconTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
        notReadIconTitle.textContent = "book-cancel-outline";
        let notReadIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        notReadIconPath.setAttribute(
            "d",
            "M12.18 20C12.36 20.72 12.65 21.39 13.04 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V12.18C19.5 12.07 19 12 18.5 12C18.33 12 18.17 12 18 12.03V4H13V12L10.5 9.75L8 12V4H6V20H12.18M23 18.5C23 21 21 23 18.5 23S14 21 14 18.5 16 14 18.5 14 23 16 23 18.5M20 21.08L15.92 17C15.65 17.42 15.5 17.94 15.5 18.5C15.5 20.16 16.84 21.5 18.5 21.5C19.06 21.5 19.58 21.35 20 21.08M21.5 18.5C21.5 16.84 20.16 15.5 18.5 15.5C17.94 15.5 17.42 15.65 17 15.92L21.08 20C21.35 19.58 21.5 19.06 21.5 18.5Z"
        );
        
        readIcon.appendChild(readIconTitle);
        readIcon.appendChild(readIconPath);
        notReadIcon.appendChild(notReadIconTitle)
        notReadIcon.appendChild(notReadIconPath);

        // Attach relevant elements to bookCard and add event listener to readIcon clicks
        bookCard.appendChild(bookImg);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(pageNumber);
        book.isRead === "read" ? bookCard.appendChild(readIcon) : bookCard.appendChild(notReadIcon);
        readIcon.addEventListener("click", () => {
            book.toggleRead();
            displayLibrary();
        });
        notReadIcon.addEventListener("click", () => {
            book.toggleRead();
            displayLibrary();
        });
        library.appendChild(bookCard);
    }
};

displayLibrary(); // Initialise display of books

/* Open dialog when Add Book button clicked */

const addBookDialog = document.querySelector(".add-book-dialog");
const addBookButton = document.querySelector(".add-book-button");
const cancelAddDialog = document.querySelector(".cancel-add-dialog")

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelAddDialog.addEventListener("click", (event) => {
    event.preventDefault();
    addBookDialog.close();
});

/* Open dialog when Delete Book button clicked */

const deleteBookDialog = document.querySelector(".delete-book-dialog");
const deleteBookButton = document.querySelector(".delete-book-button");
const cancelDeleteDialog = document.querySelector(".cancel-delete-dialog");

deleteBookButton.addEventListener("click", () => {
    deleteBookDialog.showModal();
    populateDeleteDialog();
});

cancelDeleteDialog.addEventListener("click", (event) => {
    event.preventDefault();
    deleteBookDialog.close();
});

/* Function to populate delete dialog */ 

function populateDeleteDialog() {
    const deleteForm = document.querySelector(".delete-book-form");
    let counter = 1;
    for (let book of myLibrary) {
        const bookContainer = document.createElement("div");
        bookContainer.className = "delete-book-container";

        const bookNumber = document.createElement("div");
        bookNumber.textContent = `${counter})`;
        bookNumber.className = "delete-form-text";
        counter++;
        bookContainer.appendChild(bookNumber)

        const bookTitle = document.createElement("div");
        bookTitle.textContent = `${book.title}`;
        bookTitle.classList.add("delete-form-text", "delete-form-title");
        bookContainer.appendChild(bookTitle);

        deleteForm.appendChild(bookContainer);
    };
    
    const formDeleteButtonContainer = document.createElement("div");
    formDeleteButtonContainer.className = "form-delete-button-container";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("value", "default");
    deleteButton.setAttribute("class", "delete");

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("type", "submit");
    cancelButton.setAttribute("value", "cancel");
    cancelButton.setAttribute("formmethod", "dialog");
    cancelButton.setAttribute("class", "cancel-delete-dialog");

    formDeleteButtonContainer.appendChild(deleteButton);
    formDeleteButtonContainer.appendChild(cancelButton);
    deleteForm.appendChild(formDeleteButtonContainer);
}

/* Add Book functionality */

const bookForm = document.querySelector(".book-form");
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookForm);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    let newBook = new Book(
        formObject.title,
        formObject.author,
        formObject.pages,
        formObject["read-status"],
        "img/books/book.png"
    );
    addBookToLibrary(newBook);
    displayLibrary();
    addBookDialog.close();
    bookForm.reset();
});

/* Prevent alert when refreshing page */

window.onbeforeunload = null;
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        input.dataset.touched = true;
    });
});