function Book(title, author, pagesNr, read){
    this.title = title
    this.author = author
    this.pagesNr = pagesNr
    this.read = read
    this.info = function (){
        return (title+" by "+author+", "+pagesNr+" pages, "+read)
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
const catcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", "234", "read");
const donQuixote = new Book ("Don Quixote", "Miguel de Cervantes", "300", "not read");

console.log(theHobbit.info());
console.log(catcherInTheRye.info());
console.log(donQuixote.info());

let emmaLibrary = [];

function addBookToLibrary{

}