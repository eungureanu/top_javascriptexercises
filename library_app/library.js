const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
const catcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", "234", "read");
const donQuixote = new Book ("Don Quixote", "Miguel de Cervantes", "300", "not read");

let title, author, pagesNr, read;
let emmaLibrary = [theHobbit, catcherInTheRye, donQuixote];


document.getElementById("add-book").addEventListener("click", openModal);
document.getElementById("close").addEventListener("click", closeModal);
document.getElementById("submit").addEventListener("click", addBookToLibrary);

function getUserInput() {
    title=document.getElementById("title").value;
    author=document.getElementById("author").value;
    pagesNr=document.getElementById("nr-pages").value;
    read=document.getElementById("read").value;
    console.log(title, author, pagesNr, read);
}

function displayBooks() {
    const bookCase = document.getElementById("bookcase");
    for (let i=0; i<emmaLibrary.length; i++){
        const bookShelf = document.createElement("li");
        bookShelf.innerHTML = emmaLibrary[i].info();
        bookCase.appendChild(bookShelf);
    }
}

function Book(title, author, pagesNr, read){
    this.title = title
    this.author = author
    this.pagesNr = pagesNr
    this.read = read
    this.info = function (){
        return (title+" by "+author+", "+pagesNr+" pages, "+read)
    }
}

console.log(theHobbit.info());
console.log(catcherInTheRye.info());
console.log(donQuixote.info());

let activeModal = document.getElementById("modal");
let activeOverlay = document.getElementById("overlay");

function openModal(){
    activeModal.classList.add("active");
    activeOverlay.classList.add("active");
}

function closeModal() {
    activeModal.classList.remove("active");
    activeOverlay.classList.remove("active");
}

function addBookToLibrary(){
    getUserInput();
    console.log(title, author, pagesNr, read);
    let newBook = new Book(title, author, pagesNr, read);
    emmaLibrary.push(newBook);
    console.log(emmaLibrary);
    const bookShelf = document.createElement("li");
    bookShelf.innerHTML = emmaLibrary[emmaLibrary.length-1].info();
    document.getElementById("bookcase").appendChild(bookShelf);
    closeModal();
    document.getElementById("form-body").reset();
}

displayBooks();