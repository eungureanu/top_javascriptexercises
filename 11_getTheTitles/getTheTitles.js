//source for understanding how the map mathod works: https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/
const getTheTitles = function(bookList) {
    let titles = bookList.map(function(book) {
        return book.title;
        });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;