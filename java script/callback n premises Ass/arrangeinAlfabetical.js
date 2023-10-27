function getBookTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles.sort());
  }
  
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  function logBookTitles(titles) {
    console.log("Book titles in alphabetical order:");
    console.log(titles.join("\n"));
  }
  
  getBookTitles(books, logBookTitles);
  
  /*
  expected output
  
  Book titles in alphabetical order:
  1984
  Pride and Prejudice
  The Great Gatsby
  To Kill a Mockingbird
  */