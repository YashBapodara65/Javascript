let book = {
    "title" : "Harry Potter", 
    "author" : "J.K. Rowling", 
    "pages" : 400,
    read : function(name,auth)
    {
        console.log("Reading " +name +" by " +auth);
    }
};

// console.log(book);

book.read(book.title,book.author);