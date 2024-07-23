let books = [
    {title : 'Book One', author : "Author One", year : "1999"},
    {title : 'Book Two', author : "Author Two", year : "2025"},
    {title : 'Book Three', author : "Author Three", year : "2010"}
];

for(let i=0; i<books.length; i++)
{
    if(books[i].year > 2000)
    {
        console.log(books[i].title);
    }
}