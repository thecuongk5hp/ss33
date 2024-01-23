function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}
Book.prototype.displayInfo = function() {
    console.log("Tiêu đề:", this.title);
    console.log("Tác giả:", this.author);
    console.log("Năm xuất bản:", this.publishedYear);
    console.log("\n");
};
let library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    displayLibrary: function() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function(book, index) {
            console.log("Sách thứ " + (index + 1) + ":");
            book.displayInfo();
        });
    },
};
let book1 = new Book("Doraemon", "Thế CƯờng", 2005);
let book2 = new Book("Naruto", "Kim Anh", 2005);
library.addBook(book1);
library.addBook(book2);
library.displayLibrary();
