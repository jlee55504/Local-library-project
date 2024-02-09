Local library project where people can lend and borrow books.  It shows which books are available, which are currently out, and other general statistics about the program.


account.js functions()

1.findAccountById()
has two parameters, in the following order:

- An array of account objects.
- A string ID of a single account object.

It returns the account object that has the matching ID.



2.sortAccountsByLastName()
 Has a single parameter:

- An array of account objects.

It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.



3.getTotalNumberOfBorrows()
Has two parameters, in the following order:

- An account object.
- An array of all book objects.

It returns a number that represents the number of times the account's ID appears in any book's `borrows` array.



4.getBooksPossessedByAccount()
Has three parameters, in the following order:

- An account object.
- An array of all book objects.
- An array of all author objects.

It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.




book.js functions()

1.findAuthorById()
 Has two parameters, in the following order:

- An array of author objects.
- An integer ID of a single author object.

It returns the author object that has the matching ID.



2.findBookById()
Has two parameters, in the following order:

- An array of book objects.
- A string ID of a single book object.

It returns the book object that has the matching ID.



3.partitionBooksByBorrowedStatus()
Has a single parameter:

- An array of book objects.

It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains book objects that represent the books that are currently checked out, while the second array contains book objects that represent the books that have been returned. You can check for the return status by looking at the first transaction object in the `borrows` array.



4.getBorrowersForBook()
Has two parameters, in the following order:

- A book object.
- An array of all account objects.

It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.




home.js functions()

1.getTotalBooksCount()
Has a single parameter:

- An array of book objects.

It returns a _number_ that represents the number of book objects inside of the array.




2.getTotalAccountsCount()
Has a single parameter:

- An array of accounts.

It returns a _number_ that represents the number of account objects inside of the array.



3.getBooksBorrowedCount()
Has a single parameter:

- An array of books.

It returns a number that represents the number of books that are currently checked out of the library. This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.



4.getMostCommonGenres()
Has a single parameter:

- An array of book objects.

It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

Even if there is a tie, the array should only contain no more than five objects.




5.getMostPopularBooks()
Has a single parameter:

- An array of book objects.

It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

Even if there is a tie, the array should only contain no more than five objects.



6.getMostPopularAuthors()
Has two parameters, in the following order:

- An array of book objects.
- An array of author objects.

It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

Even if there is a tie, the array should contain no more than five objects.