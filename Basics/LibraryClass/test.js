console.log("Library Class");

// Problem Statement:-
// Create a library class and implement the following:

// 1. Create a constructor that takes the book list as an argument.
// 2. getBookList(): This function should return the list of all book present in the library.
// 3. issueBook(bookname, user): This function takes an argument of bookname and user, in bookname,
//      we specify the name of the book, and in user, we specify the name of the user. 
//      This function will issue the book to the user.
// 4. returnBook(bookname): This function will take one argument, which is the name of the book.
//      The purpose of this function is to remove the book from the users borrowed book data. 


class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }
        else{
            console.log("Book has already been issued!");
        }

    }

    returnBook(){
       delete this.issuedBooks[bookName];
    }
}