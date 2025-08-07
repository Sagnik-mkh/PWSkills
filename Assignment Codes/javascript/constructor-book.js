function Book(title, author) {
    this.book = title;
    this.name = author;
}

Book.prototype.display = function () {
    console.log(`Title: ${this.book}, Author: ${this.name}`);
}

const book1 = new Book("Harry Potter", "J K Rowling");
const book2 = new Book("Origins", "Dan Brown");

book1.display();
book2.display();