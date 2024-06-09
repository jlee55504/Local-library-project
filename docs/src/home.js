function getTotalBooksCount(books) {
  //Return 0 if the books array is empty
  if (books.length === 0) return 0;
  
  let bookAmount = [];
  
  //Counts the number of books in books array
  for (let book in books) {
    bookAmount.push(1);
  }
  
  //Adds up and returns the total number of books
  return bookAmount.reduce((acc, currNum) => {
    return acc + currNum
  });
}

function getTotalAccountsCount(accounts) {
  //Returns the number of accounts in the accounts array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let totalNumber = 0;
  
  //Checks if a specific book is checked out. If so, it adds up the total amount
  books.forEach((book) => {
    const bookReturned = book.borrows;
    if (bookReturned) {
      for (let isReturned of bookReturned) {
        if (isReturned.returned === false) totalNumber += 1;
      }
    }
  });
  return totalNumber;
}


function getMostCommonGenres(books) {
  let currBookType;
  let answer = [];

  //Gets all the book genres
  const bookTypes = books.map((book) => book.genre);
  
  //Sorts the book Genres alphabetically
  bookTypes.sort((bookGenreA, bookGenreB) => bookGenreA.toLowerCase() > bookGenreB.toLowerCase() ? 1 : -1);
 

  //Adds the book genres to the answer array while totaling up the number of times they appear
  for (let i = 0; i < bookTypes.length; i++) {
    
    if(currBookType && currBookType === bookTypes[i]) {
        for (let j = 0; j < answer.length; j++) {

          /*Checks if a book genre is already in the answer array. If so, it adds up the number of times
          it appears while not adding it again to the answer array*/
         
         
          if(currBookType === answer[j].name) {
            answer[j].count += 1; 
            continue;
    } 
  }
      continue;
  }
    answer.push({name: bookTypes[i], count: 1})
    currBookType = bookTypes[i];  
}

//Sorts the number of times the book genre appears from greatest to least
answer.sort((bookGenreA, bookGenreB) => bookGenreA.count < bookGenreB.count ? 1 : -1);

//Reduces the answer array to the 5 most common book genres
if (answer.length > 5) {
  for (let i = answer.length; i > 5; i--) {
    answer.pop();
  }
}
return answer;

//CodeGPT's answer

 // Create an empty object to store the genres and their counts
 /*let genres = {};

 // Iterate over the books array
 for (let book of books) {
   // If the genre is already in the genres object, increment its count
   if (genres[book.genre]) {
     genres[book.genre]++;
   } else {
     // If the genre is not in the genres object, add it with a count of 1
     genres[book.genre] = 1;
   }
 }

 // Convert the genres object to an array of objects
 let genresArray = Object.keys(genres).map((genre) => {
   return { name: genre, count: genres[genre] };
 });

 // Sort the array by count in descending order
 genresArray.sort((a, b) => b.count - a.count);
 
 // Return the first five elements of the sorted array
 return genresArray.slice(0, 5);*/
}

function getMostPopularBooks(books) {
  let bookArr = [];
  let answerArr = [];

  //Adds the title and number of time that specific book has been checked out and adds it to the bookArr array
  books.forEach((book) => bookArr.push({name: book.title, count: book.borrows.length}));
  
  //Sorts bookArr (books array) array from the most checked-out book to the least
  bookArr.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  
  //Adds the top 5 most checked-put books to the answerArr (answer array)
  for (const book of bookArr) {
    if (answerArr.length !== 5) answerArr.push(book);
      else break;
  }
  return answerArr;
}

function getMostPopularAuthors(books, authors) {
  let answerArr = [];
  let authorArr = [];
  let currName;

  //Gets all authors' ids and authors' names
  const authorInfo = authors.map((author) => ({ id:author.id, name: author.name}));

  //Sorts author ids' from greatest to least
  books.sort((bookA, bookB) => bookA.authorId < bookB.authorId ? 1 : -1);

  /*Gets all author ids and the number of times each book has been checked out from 
  the books array*/
  const bookAuthorInfo = books.map((book) => ({ id:book.authorId, count: book.borrows.length}));
  
  /*Matches the book authors' id with  the author's id, adds all the authors' names and number
   of times each of there books has been checked out, then adds the info to the authorArr 
   array*/
  for (let i = 0; i < authorInfo.length; i++) {
    for (let j = 0; j < bookAuthorInfo.length; j++) {
      if(bookAuthorInfo[j].id === authorInfo[i].id) {
        authorArr.push({name: `${authorInfo[i].name.first} ${authorInfo[i].name.last}`, count: bookAuthorInfo[j].count});
      }
    }
  }

  /*Adds author info to the answerArr*/
  for (const author in authorArr) {
    //Checks if the author is already in the answerArr array
    if (currName && currName === authorArr[author].name) {
    for (let j = 0; j < answerArr.length; j++) {

      /*Adds the total amount of times each author's book has been checked out while preventing adding the same author to the answerArr array*/
      if (answerArr[j].name === authorArr[author].name) {
        answerArr[j].count += authorArr[author].count;
        continue;
    }
    }
      continue; 
    }
    answerArr.push(authorArr[author]);
    currName = authorArr[author].name;
  }


  /*Sorts the author by popularity based on the number of times their books 
  have been checked out*/
  answerArr.sort((countA, countB) => countB.count - countA.count);

  //Shortens the answer array to the 5 most poular authors
  for (let i = answerArr.length; i > 5; i--) {
    answerArr.pop()
  }
  return answerArr; 
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
