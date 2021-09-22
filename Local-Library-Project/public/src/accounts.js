function findAccountById(accounts, id) {
 //It returns the account object that has the matching ID.
  return result = accounts.find((account) => id === account.id)
}

function sortAccountsByLastName(accounts) {
  return result = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
//It returns a _number_ that represents the number of times the account's
//ID appears in any book's `borrow` array.
// EXAMPLE: getTotalNumberOfBorrows(account, books); RESULT: 22

//wants to know how many times an account has borrowed books.
//set counter
let numberOfBorrows = 0
//loop through books, loop through borrows within books
for (let i =0; i < books.length; i++){

  for (let j = 0; j < books[i].borrows.length; j++){
    // if account.id matches books[i].borrows[j].id 
    if (account.id === books[i].borrows[j].id){
      //add to counter
      numberOfBorrows++
    }
  }
}
//return counter
return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  /*
 It returns an array of books and authors that represents all books _currently checked out_ 
 by the given account. _Look carefully at the object below,_ as it's not just the book object;
 the author object is embedded inside of it.
 */

 //get books where books.borrows[0].returned = false
 //filter checked out books by book.borrows[0].id = account.id
 //add matching author to author id of the books checked out by the account

let checkedOutBooks = books.filter((book) => book.borrows[0].returned === false);

let accountBooks = checkedOutBooks.filter((book) => book.borrows[0].id == account.id)

for (let i = 0; i < accountBooks.length; i++){
  for (let j = 0; j < authors.length; j++){
    if (accountBooks[i].authorId == authors[j].id){
      accountBooks[i].author = authors[j]
    }
  }
}

return accountBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
