let book = {
    "title" : "Harry Potter", 
    "author" : "J.K. Rowling", 
    "pages" : 400,
};

for(let k in book)
{
    console.log(`${k} : ${book[k]}`);
}