function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
}
Book.prototype.borrow = function() {
    if (this.isAvailable) {
        console.log("Đã mượn sách:", this.title);
        this.isAvailable = false;
    } else {
        console.log("Sách không có sẵn để mượn.");
    }
};
Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
        console.log("Đã trả sách:", this.title);
        this.isAvailable = true;
    } else {
        console.log("Sách đã có sẵn.");
    }
};
let library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    isBookAvailable: function(bookTitle) {
        let foundBook = this.books.find(book => book.title === bookTitle);
        if (foundBook) {
            return foundBook.isAvailable;
        } else {
            console.log("Không tìm thấy sách trong thư viện.");
            return false;
        }
    },
};
let Doraemon = new Book("Doraemon", "Thế Cường", 2018);
let Naruto = new Book("Naruto", "Kim Anh", 2020);
library.addBook(Doraemon);
library.addBook(Naruto);
Doraemon.borrow();
Doraemon.returnBook();
let isBookAvailable = library.isBookAvailable("Doraemon");
console.log("Cuốn sách có sẵn để mượn:", isBookAvailable);
