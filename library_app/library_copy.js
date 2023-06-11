const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read", "1");
const catcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", "234", "unread", "2");
const donQuixote = new Book ("Don Quixote", "Miguel de Cervantes", "300", "read", "3");

let title, author, pagesNr, read;
let emmaLibrary = [theHobbit, catcherInTheRye, donQuixote];


document.getElementById("add-book").addEventListener("click", openModal);
document.getElementById("close").addEventListener("click", closeModal);
document.getElementById("submit").addEventListener("click", addBookToLibrary);
document.getElementById("table-body").addEventListener("click", removeBookFromLibrary);
document.getElementById("table-body").addEventListener("click", toggleStatus);


function getUserInput() {
    title=document.getElementById("title").value;
    author=document.getElementById("author").value;
    pagesNr=document.getElementById("nr-pages").value;
    read=document.getElementById("read-unread").checked;
}

function styleExistingStatus(i) {
    let existingStatusStyle;
    if (emmaLibrary[i].read == "read") {
        existingStatusStyle = "<button class='status read'>Read</button>";
    }
    else {
        existingStatusStyle = "<button class='status unread'>Unread</button>"
    }
    return existingStatusStyle;
}

function styleNewStatus(){
    let newStatusStyle;
    if (document.getElementById("read-unread").checked==true){
        newStatusStyle="<button class='status read'>Read</button>";
    }
    else {
        newStatusStyle="<button class='status unread'>Unread</button>";
    }
    return newStatusStyle;
}

//uses global "read" variable that is used by the object constructor and the addBooksToLibrary function as well
function checkStatus(){
    if (document.getElementById("read-unread").checked==true){
        read="Read";

    } else {
        read="Unread";
    }
    console.log(read);
    return read;
}

function toggleStatus(x){
    if (x.target.innerHTML === "Read"){
        console.log(x.target.classList);
        x.target.innerHTML="Unread";
        x.target.setAttribute("class", "status unread");
        console.log(x.target.classList);
    } else if (x.target.innerHTML === "Unread"){
        console.log(x.target.classList);
        x.target.innerHTML="Read";
        x.target.setAttribute("class", "status read");
        console.log(x.target.classList);
    }
}


const bookCase = document.getElementById("table-body");
function displayInitialBooks() {
    for (let i=0; i<emmaLibrary.length; i++){
        const bookShelf = bookCase.insertRow(0);
        const cell1=bookShelf.insertCell(0);
        const cell2=bookShelf.insertCell(1);
        const cell3=bookShelf.insertCell(2);
        const cell4=bookShelf.insertCell(3);
        const cell5=bookShelf.insertCell(4);
        cell1.innerHTML = emmaLibrary[i].title;
        cell2.innerHTML = emmaLibrary[i].author;
        cell3.innerHTML = emmaLibrary[i].pagesNr;
        cell4.innerHTML = styleExistingStatus(i);
        cell5.innerHTML = "<button data-code="+(i+1)+" class='delete-button'>Delete</button>";
    }
}

function Book(title, author, pagesNr, read, uniqueBookId){
    this.title = title
    this.author = author
    this.pagesNr = pagesNr
    this.read = read
    this.bookId = uniqueBookId;
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

let uniqueBookId=3;//unique ID generator similar to Nr Crt in an excel spreadsheet; initiaised with 3 because you start with 3 books in the library
function addBookToLibrary(){
    getUserInput();
    console.log(title, author, pagesNr, read, uniqueBookId);
    uniqueBookId=uniqueBookId+1; //generate new ID for the new book as you would when adding a new row in excel; 
    let newBook = new Book(title, author, pagesNr, checkStatus(), uniqueBookId);
    emmaLibrary.push(newBook);
    console.log(emmaLibrary);
    const bookShelf = bookCase.insertRow(0);
    const cell1 = bookShelf.insertCell(0);
    const cell2 = bookShelf.insertCell(1);
    const cell3 = bookShelf.insertCell(2);
    const cell4 = bookShelf.insertCell(3);
    const cell5 = bookShelf.insertCell(4);
    cell1.innerHTML = emmaLibrary[emmaLibrary.length-1].title;
    cell2.innerHTML = emmaLibrary[emmaLibrary.length-1].author;
    cell3.innerHTML = emmaLibrary[emmaLibrary.length-1].pagesNr;
    cell4.innerHTML = styleNewStatus();
    cell5.innerHTML = "<button data-code="+uniqueBookId+" class='delete-button'>Delete</button>";
    closeModal();
    document.getElementById("form-body").reset();
}

function removeBookFromLibrary(x) {
    if (x.target.innerHTML === "Delete") {
        let rowIndex = x.target.parentElement.parentElement.rowIndex; //get the index of the row where the button is placed; (2nd parent element because button -> td -> tr
        document.getElementById("bookcase").deleteRow(rowIndex); //delete the table row with that index

        //remove from the array the book that has the same bookID as the delete button that was clicked 
        let y = x.target.dataset.code;
        for (let i=0; i<emmaLibrary.length; i++){
            if (emmaLibrary[i].bookId==y){
                emmaLibrary.splice(i, 1);
            }
            //Note: no need to manipulate the uniqueBookID, new books will always get a new unique ID and we don't care about keeping the IDs of the deleted books
        }
        console.log(emmaLibrary);
    }
}

displayInitialBooks();
