class Library {
  name: string = "";
  location: string = "";
  books: string[] = [];

  addBook(libraryName: string, libraryLocation: string, book: string): void {
    this.name = libraryName;
    this.location = libraryLocation;
    this.books.push(book);
  }

  findBook(itemName: string) {
    const foundBook = this.books.find((bookName) => {
       return bookName === itemName;
    })
    if (foundBook)
    {
      return console.log(`Tồn tại sách ${itemName} được để ở library: ${this.name} tại ${this.location}`);
    } else {
      return console.log(`Không tồn tại sách ${itemName} trong thư viện`);
    }
  }
}

const library = new Library();
library.addBook("Fairy tale", "Book Shelf A", "A thoundsand night");
library.addBook("Fairy tale", "Book Shelf A", "Tam cam");
library.addBook("Fairy tale", "Book Shelf A", "Thach sanh");
console.log(library.books);
library.findBook(`Thach sanh`);
library.findBook(`Tam cam`);
library.findBook(`Doraemon`);