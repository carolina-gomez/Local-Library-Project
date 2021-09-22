function findAuthorById(authors, id) {
  //find author obect that has same id as id parameter
  return authors.find((author) => id === author.id);
}

function findBookById(books, id) {
  //It returns the book object that has the matching ID.
  return books.find((book) => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
/*
It returns an array with two arrays inside of it. All of the inputted books are present in
either the first or second array.

The first array contains books _that have been loaned out, and are not yet returned_ 
while the second array contains books _that have been returned._ You can check for the return
status by looking at the first transaction in the `borrows` array.
*/

//FIRST ARRAY HAS BOOKS WERE BORROWS[0].RETURNED === FALSE
//SECOND ARRAY = BOOKS WHERE BORROWS[0].RETURNED === TRUE
//MAKE TWO ARRAYS OF OBJECTS
//COMBINE THEM INTO AN ARRAY WITH THE SPREAD OPERATOR

let returnedBooks = []
let booksThatAreOut = []

for (let i = 0; i < books.length; i++){
  if (books[i].borrows[0].returned === false){
    returnedBooks.push(books[i]);
  }
}

for (let i = 0; i < books.length; i++){
  if (books[i].borrows[0].returned === true){
    booksThatAreOut.push(books[i]);
  }
}

return [returnedBooks,booksThatAreOut];
}

function getBorrowersForBook(book, accounts) {
/*
It should return an array of all the transactions from the book's `borrows` key.
However, each transaction should include the related account information and the `returned` key.
*/

//USE SHORTHAND ... TO COMBINE THE BOOK.BORROWS WITH THE ACCOUNT
let bookBorrowers = []


for (let i = 0; i < book.borrows.length; i++){
  for (let j = 0; j < accounts.length; j++){
    if (book.borrows[i].id === accounts[j].id){
      const result = {...book.borrows[i], ...accounts[j]}
      bookBorrowers.push(result)
    }
  }
};
bookBorrowers.splice(10);
return bookBorrowers;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
