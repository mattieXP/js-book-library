const heroButton = document.querySelector("#add-book");
const submitButton = document.querySelector("#submit-btn");
const dialogBox = document.querySelector("#dialog-box");
const bookShelf = document.querySelector("#book-shelf");
const closeButton = document.querySelector("#close-icon");
const form = document.querySelector("#form");

//Ouvrir la fenêtre de dialogue au click sur heroButton
heroButton.addEventListener("click", () => {
    dialogBox.showModal();
});

//Fermer la fenêtre de dialogue quand click sur close-icon
closeButton.addEventListener("click", () => {
    dialogBox.close();
});

//Array qui stocke les books
const bookList = [
    {
        title: "Love Yourself First!",
        author: "Marc Reklau",
        pages: 202,
        read: true,
        id: "hfukshcudsf"
    },
    {
        title: "My Friends",
        author: "Fredrik Backman",
        pages: 448,
        read: true,
        id: "sdjbfufsdfsf"
    },
    {
        title: "Journey to the River Sea",
        author: "Eva Ibbotson",
        pages: 320,
        read: false,
        id: "flqjljfsfhdsfh"
    }
];

// Object constructor de Book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
}

//Fonction qui crée un book (objet)
let createBook = function(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    bookList.unshift(book);
    drawBook(book);
}

//Texte à afficher pour le toggle Read
const isRead = function(read) {
    if (read === true) {
        return "Read";
    } else {
        return "Not Read yet";
    }
}


//Crée une card dans bookShelf, Append la couverture, le titre et le détail du new book, en première place
const drawBook = function(book) {

    let bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.dataset.id = book.id;
    let bookCover = document.createElement("div");
    bookCover.className = "book-cover";
    
    let bookSpine = document.createElement("div");
    bookSpine.className = "book-spine";
    bookCover.appendChild(bookSpine);
    let bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookCover.appendChild(bookTitle);
    let bookAuthor = document.createElement("p");
    bookAuthor.classList = "display-author subtitle";
    bookAuthor.textContent = book.author;
    bookCover.appendChild(bookAuthor);
    let bookPages = document.createElement("p");
    bookPages.classList = "display-pages subtitle";
    bookPages.textContent =  String(book.pages) + " pages";
    bookCover.appendChild(bookPages);

    let divRead = document.createElement("div");
    divRead.className = "checkbox-read";
    let readToggle = document.createElement("input");
    readToggle.type = "checkbox";
    readToggle.className = "card-toggle";
    readToggle.checked = book.read;
    divRead.appendChild(readToggle);
    let readLabel = document.createElement("p");
    readLabel.textContent = isRead(book.read);
    divRead.appendChild(readLabel);

    let deleteButton = document.createElement("button");
    deleteButton.classList = "delete-btn bold";
    deleteButton.textContent = "- Delete book";

    bookCard.appendChild(bookCover);
    bookCard.appendChild(divRead);
    bookCard.appendChild(deleteButton);

    bookShelf.prepend(bookCard);
}

// Initialisation de la page
bookList.forEach(book => {
    drawBook(book);  
    });

//Enregistrer les réponses aux champs dans un nouveau book
submitButton.addEventListener("click", event => {
    event.preventDefault();

    let title = document.getElementById("book-title").value;
    let author = document.getElementById("book-author").value;
    let pages = document.getElementById("nb-pages").value;
    let read = document.getElementById("toggle-read").checked;

    createBook(title, author, pages, read);

    form.reset(); 
    dialogBox.close();
});

//Change Read status from page to object

//Delete un objet et le supprimer du book Shelf
