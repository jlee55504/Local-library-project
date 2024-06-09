function findAuthorById(authors, id) {
  //Returns the desired author
 return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  //Returns the desired book
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let answer;

  //Finds all the books that are currently checked out.
  const checkedOutBookArr = books.filter((book) => book.borrows[0].returned === false);

  //Finds all the books that are not currently checked out.
  const returnedBookArr = books.filter((book) => book.borrows[0].returned === true);

  //Ads both arrays into one and reutrns the answer
  answer = [checkedOutBookArr, returnedBookArr]
  return answer;
  }

function getBorrowersForBook(book, accounts) {
 //Code that works for all the data in both the books and accounts arrays
 
  /* //Prevents from adding the same accountId into the answer
  let currId;
  let answer = [];
  let accountsArr = [];
  let allBorrowsInfo = [];

  //Get the borrows array info from the books array
  const borrowsInfo = book.map(({borrows}) => borrows);
  
  //Helper function to add individual borrows array items to allBorrowsInfo array
  const addBorrowsInfo = (borrowsArr ,borrowsInfo) => borrowsArr.push(borrowsInfo);

  //Adds individual borrows array items to allBorrowsInfo array
  for (let i = 0; i < borrowsInfo.length; i++) {
    for (let j = 0; j < borrowsInfo[i].length; j++) {
      addBorrowsInfo(allBorrowsInfo, borrowsInfo[i][j]);
    }    
  }

  //Sorts borrows array id's
  allBorrowsInfo.sort((idA, idB) => idA.id > idB.id ? 1 : -1);

  //Finds the specific accounts that match the borrow array id's and add them to accountsArr
  for (let i = 0; i < allBorrowsInfo.length; i++) {
    let arr = accounts.filter((account) => account.id === allBorrowsInfo[i].id
  );
    accountsArr.push(arr);
}

  //Adds all the account info matching the borrows array info to the answer array
  for(let i = 0; i < accountsArr.length; i++) {
    for (const person in accountsArr[i]) {
      const account = accountsArr[i][person];

    //Gets specific account properties
    const {id, picture, age, name, company, email, registered} = accountsArr[i][person];
    for (let k = 0; k < allBorrowsInfo.length; k++) {
      const { returned } = allBorrowsInfo[k];
      const borrowsId = allBorrowsInfo[k].id;

      //Checks if both account id and borrows array id match
      if(account.id === borrowsId) {

      //Prevents the same account from being added twice
       if(currId === borrowsId) continue;
       answer.push({id, returned,
      picture, age, name,
    company, email, registered});
       currId = borrowsId;
     }
   }
  }
}

  //Shortens the answer (specific account info) if there's more than 10 accounts
  if (answer.length > 10) {
    for (let i = answer.length; i > 10; i--) {
      answer.pop();
}
}
  return answer;*/

  //Qualified (Chegg Skills answer)
  
   let accountInfo = [];
  let answer = [];
  let currId;
 
  //Gets the borrows array out of the book object
  const { borrows } = book;
 
  //Finds the account that matches the borrows id
  for(let i = 0; i < borrows.length; i++) {
  const arr = accounts.filter((account) => account.id === borrows[i].id)
    accountInfo.push(arr);
  }

   //Adds all the account info matching the borrows array info to the answer array
   for (let i = 0; i < accountInfo.length; i++) {
     for (const person in accountInfo[i]) {
     //Gets specific account properties
     const { id, picture, age, name, company, email, registered } = accountInfo[i][person];
     for (let k = 0; k < borrows.length; k++) {
       const { returned } = borrows[k];
       const currBorrowId = borrows[k].id;
       
       //Checks if an account is already in the answer array.  If so, it won't add that account
       if (id === currBorrowId) {
         if (currId === currBorrowId) continue;
         answer.push({id, returned, picture, age, name, company, email, registered});
         currId = currBorrowId;
       }
     }
     }
   }

  //Helper function to shorten the answer (specific account info) if there's more than 10 accounts
  const reduceAnswer = answer => {
    for( let i = answer.length; i > 10; i--) {
      answer.pop();
    }
    return answer;
  }
  //Checks if the answer has over 10 accounts
  if (answer.length > 10) {
 reduceAnswer(answer);
}   
  return answer;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
