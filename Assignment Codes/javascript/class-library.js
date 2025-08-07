class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.Allbooks = [];
    }

    addBook(book) {
        const exists = this.Allbooks.find((currBook) => {
            return currBook.title == book.title;
        })
        if (!exists) {
            this.Allbooks.push(book);
            console.log(`Added -- Book: ${book.title}, Author: ${book.author}`);
        } else console.log(`${book.title} book already exists`);
    }

    checkOutBook(title) {
        const available = this.Allbooks.find((currBook) => {
            return (currBook.title == title) && currBook.isAvailable;
        })

        if (available) {
            available.isAvailable = false;
            console.log(`Checked out -- Book: ${available.title}, Author: ${available.author}`);
        } else console.log(`${title} book not available`);
    }

    returnBook(title) {
        const libBook = this.Allbooks.find((currBook) => {
            return (currBook.title == title) && !currBook.isAvailable;
        })

        if (libBook) {
            libBook.isAvailable = true;
            console.log(`Return -- Book: ${libBook.title}, Author: ${libBook.author}`);
        } else console.log(`No log of ${title} book being checked out`);
    }
}

const library = new Library();

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.checkOutBook("The Alchemist");
library.checkOutBook("The Alchemist");
library.returnBook("The Alchemist");