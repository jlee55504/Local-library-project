
function findAccountById(accounts, id) {
  //Helper function to find the specific id in the accounts array
  const findAccountId = account => account.id === id; 

  return accounts.find(findAccountId);
}

function sortAccountsByLastName(accounts) {
  //Sorts names in accounts array alphabetically
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
}

const getTotalNumberOfBorrows = (account, books) => {
 //Code that works for all the data in both the books and accounts arrays

  /* let totalNumber = 0;
  let accountIdArr;

  //Gets borrows array from each book object
  const bookBorrowsArr = books.map((book) => book.borrows);
  let bookBorrowsIds = [];

  //Adds the ids' of each borrowed book to the bookBorrowIds array
  for (let i = 0; i < bookBorrowsArr.length; i++) {
    for (const id in bookBorrowsArr[i]) {
      bookBorrowsIds.push(bookBorrowsArr[i][id].id);
  }  
}

  //Gets all account ids'
  const accountsIds = account.map((account) => account.id);

  //Gets all the account ids' that match the borrowed book ids'
  for (let i = 0; i < accountsIds.length; i++) {
    accountIdArr = bookBorrowsIds.filter((book) => book === accountsIds[i])
}

  //Adds the total number of books borrowed
  totalNumber = accountIdArr.length;

  return totalNumber;*/


  //Chegg Skills answer
 
  let totalNumber  = 0;
  let accountIdArr;

  //Gets borrows array from each book object
  const bookBorrowsArr = books.map((book) => book.borrows);
  let bookBorrowsIds = [];

  //Adds the ids' of each borrowed book to the bookBorrowIds array
  for (let i = 0; i < bookBorrowsArr.length; i++) {
    for (const book in bookBorrowsArr[i]) {
      bookBorrowsIds.push(bookBorrowsArr[i][book].id);
  }  
}
  
  //Gets all the borrowed book ids' that match the account id 
  accountIdArr = bookBorrowsIds.filter((book) => book === account.id);

  //Adds the total number of books borrowed
  totalNumber = accountIdArr.length;

  return totalNumber;
}

function getBooksPossessedByAccount(account, books, authors) {
  //get all the books that have borrow.returned===false and  borrow id= accountid 
  const accountBooks= books.filter((book)=> book.borrows[0].returned === false && book.borrows[0].id === account.id)

  //add author based on authorId
  for (let i = 0; i< accountBooks.length; i++){
    //get the book that match the authorId
    const bookName = authors.filter((author)=> author.id === accountBooks[i].authorId);
    //assign author
    accountBooks[i].author = bookName[0];
  }
  return accountBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
