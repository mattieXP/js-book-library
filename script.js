const heroButton = document.querySelector("#add-book");
const submitButton = document.querySelector("#submit-btn");
const dialogBox = document.querySelector("#dialog-box");
const bookShelf = document.querySelector("#book-shelf");
const closeButton = document.querySelector("#close-icon");

// Object constructor de Book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Randomiser l'ID et l'ajouter au prototype de Book
Book.prototype.addID = function() {
    let id = self.crypto.randomUUID();
    this.id = id; 
}

//Ouvrir la fenêtre de dialogue au click sur heroButton
const openDialog = function() {
heroButton.addEventListener("click");

}

//Enregistrer les réponses aux champs dans un nouveau book

const createBook = function(event) {
    submitButton.addEventListener("click");
    event.preventDefault();
}


//Fermer la fenêtre de dialogue quand click sur close-icon
const closeDialog = function() {
    closeDialog.addEventListener("click");
}

//Crée une div dans bookShelf, Append la couverture, le titre et le détail du new book, en première place

