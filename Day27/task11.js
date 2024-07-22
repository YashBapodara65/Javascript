let book = {
    "title" : "Harry Potter", 
    "author" : "J.K. Rowling", 
    "pages" : 400,
    read : function(name,auth)
    {
        return "Reading " +name +" by " +auth;
    }
};

console.log(book);

// console.log(`Reading ${book.title} by ${book.author}`);

console.log(book.read(book.title,book.author));