class Book {
    constructor(title,author,isbn,available=true){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = available
        
    }
    // methods to change the available status to false if the book is available
borrowBook() {
    if(this.available){
        this.available =false;
        return `Title: ${this.title} \nAuthor: ${this.author} \nISBN: ${this.isbn} \nHas been succesfully borrowed`;
    } else {
    return `Title: ${this.title} \nAuthor: ${this.author} \nISBN: ${this.isbn} is not available.`;
}

}
returnBook() {
    if (!this.available){
        this.available = true;
        return `Title: ${this.title} \nAuthor: ${this.author} \nISBN: ${this.isbn} \nHas been succesfully returned.`;
    } else {
        return `this book \n${this} \nHas not been borrowed.`
    }

  }
  toString() {
    return `Book(ISBN: ${this.isbn}, Available: ${this.available}, Author: ${this.author})`;
  }
};

const mechBook = new Book('statics','ks stroud',23-4-521,true);

// console.log(mechBook.borrowBook())
// console.log(mechBook.returnBook())

class Library {
    constructor(){
        this.books = []; // array for storing books object
    }
    //librabry methods to add books
    addBook(book) {
        if(book instanceof Book){
            this.books.push(book);
            return `Title: \n${book.title} has been added to the library`;
        } else {
            return `only instances of Book can be added to the library.`;
        }
    }
    //method to remove books by its ISBN number
    removeBook(isbn) {
        const index = this.books.findIndex(book => book.isbn === isbn);
        if(index !== -1){
            this.books.splice(index, 1);
            return `ISBN: "\n${isbn}" has been removed from the library.`;
        } else {
            return `The book ISBN: "\n${isbn} was not found in the library.`;
        }
    }
    //searces for a book by its title and return its details
findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
        return`book in the library ${title} was found`
    } else {
        return `The book ${title} in the library was not found.`;
    }
}
listBooks() {
console.log("listing all books in the library:")
this.books.forEach(book => console.log(book.toString()))
}

};
const cklibrary = new Library();
const bookA = new Book('robotics','akintunde',32-1-432,"yes");
const bookB = new Book('AI','newton',32-1-565,"yes");

// console.log(cklibrary.addBook(bookA));//adding bookA
// console.log(cklibrary.addBook(bookB)); //Adding bookB
// cklibrary.listBooks(); //shows the list of books in the library


// console.log(cklibrary.removeBook(171565)); //remove book by ISBN
// console.log(cklibrary.findBookByTitle('AI')); //finds by title
// cklibrary.listBooks() //list the remaining book left after the remove function

class DigitallLibrary extends Library {
    constructor() {
        super();
        this._digitalBooks = [];

    }
    downloadBook(isbn) {
        const book = this._digitalBooks.find(book => book.isbn === isbn);
        if (book)  {
            console.log(`digital book ${this._digitalBook.toString()} is downloading.`);
        } else {
            console.log('book not found');
        }
    }
    get digitalBooks() {
        return this._digitalBooks;

    }

    //setter to replace the digital books
    set digitalBooks(newBooks) {
        if (Array.isArray(newBooks)) {
            this._digitalBooks = newBooks;
            console.log("Digital list books has been updated.");
        } else {
            console.log("invalid input.please specify a book array")
        }
    }
}
const digitalLibrary = new DigitallLibrary();
const digitalBookA = new Book('static','ks stroud','72-4-123');
const digitalBookB = new Book('physics','PN Okeke','72-1-44');

//using setter to add digital books
digitalLibrary.digitalBooks = [digitalBookA, digitalBookB];

// downloading a book
digitalLibrary.downloadBook('72-1-55');

//using getter to retrieve the digital books
console.log('List of Digital Books:', digitalLibrary.digitalBooks);

//set an invalid data
digitalLibrary.digitalBooks = "Not found in this array"






