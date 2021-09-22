function helperFunction(arr){
  return arr.reduce((counter, index) => counter+= 1, 0);
}

function getTotalBooksCount(books) {
  // return the length of the books array
  return helperFunction(books);
}

function getTotalAccountsCount(accounts) {
  // return the length of the accounts array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //It returns a number that represents the number of books that are currently checked out of the library.
  // This number can be found by looking at the first transaction in the `borrows` key of each book.
  //If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.
 // EXAMPLE: getBooksBorrowedCount(accounts); RESULT: 65
 
 // SET UP COUNTER
let booksBorrowed = 0

 // LOOP THROUGH THE BOOKS ARRAY.
 for (let i = 0; i < books.length; i++){
    // IF BOOKS[I].BORROWS.RETURNED = FALSE => ADD NUMBER TO A COUNTER
    if (books[i].borrows[0].returned == false) {
      booksBorrowed++
    }
 }

  // RETURN FINAL COUNTER
 return booksBorrowed;
}

function getMostCommonGenres(books) {
  // create new array of most common genres - use reduce() ?
  let result = books.reduce((acc, book) => {
    // get the genre of current book
    let genre = book.genre;

    // get object in acc that has "name === genre"
    let genreInformation = acc.find((element) => element.name === genre);

    // if an object was not found, create a new one and push it into acc
    if (!genreInformation) {
      const newGenreInformation = {
        name: genre,
        count: 1,
      };
      acc.push(newGenreInformation);
    } else {
      // if object was found, then add one to count
      genreInformation.count++;
    }

    return acc;
  }, []);

   // sort the array by count from greatest to least
  result.sort((genreA, genreB) => genreB.count - genreA.count);

  // limit array to 5
  result.splice(5);

  return result;
}

function getMostPopularBooks(books) {
//INSTRUCTIONS
//  It returns an array containing five objects or fewer that represents the most popular books in the library.
//  Popularity is represented by the number of times a book has been borrowed.

//loop through books array
//create objects with book title and a count
// loop through borrows of each book and count the number of times borrowed
// add times borrowed - the counter - to the book title object
// add completed object to popular books array
// return array

let popularBooks = []
return books.map((book) => {
  return {name: book.title, count: book.borrows.length};
})
.sort((superA, superB) => (superA.count < superB.count ? 1 : -1))
.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
// INSTRUCTIONS
//It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most.
//Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

//create popularAuthors empty array
//create a mini function that filters books by a specific author. combine borrows from those books and count them.
// make object with the right format meaning name: first last, count: 1234
// repeat function to filter all authors and create objects for each
//add all to array
//sort by count
//splice(5)
//return final array

let popularAuthors = []

for (let i = 0; i < authors.length; i++){
let found = books.find((book) => book.authorId === authors[i].id);

const author = {name: `${authors[i].name.first} ${authors[i].name.last}`, count: 0};

  for (let j = 0; j < found.borrows.length; j++){
    author.count++
  }

popularAuthors.push(author)
}

popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);

popularAuthors.splice(5);

return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
