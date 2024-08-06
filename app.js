//! build function for books list
function bookCreator(name,author,price) {
    return{
        name,
        author,
        price
    }
}
const books = [
    bookCreator("Deep work" , "Cal Newport" , 15.99),
    bookCreator("Digital Minimalism" , "Cal Newport" , 12.74),
    bookCreator("Atomic Habit" , "James Clear" , 13.99),
    bookCreator("compund Effect" , "Darren Hardy" , 14.99),
    bookCreator("Do It Today" , "Darius Foroux" , 9.99),
    bookCreator("5am club" , "Robin Sharma" , 14.02),
    bookCreator("5 seconds Rule" , "Mel Robbins" , 9.5),
    bookCreator("Hight 5 Habit" , "Mel Robbins" , 12.99)
]
const myBooks=[]
//! Getting the user's needs
var showPrompt = true
while (true) {
    console.log(`
        Your Menu : 
            a : books list
            b : Search Book
            c : search author
            d : my Book
            f : sort Books
            g : exit
    `);
    if(showPrompt) var input = prompt('Enter a Menu : ')
    if(input === 'g' || input === 'G') break
    switch (input) {
        case 'a' || 'A':
            showListBook(books)
            break;
        case 'b' || 'B':
            var searchKey = prompt('Enter a Book name : ')
            searchBook(searchKey)
            showPrompt = false
            break;
        case 'c' || 'C':
            var searchAuthor = prompt('Enter a author name : ')
            searchAuthorProcess(searchAuthor)
            showPrompt = false
            break
        case 'd' || 'D':
            showListBook(myBooks)
            break
        case 'f' || 'F':
            console.log(`
                a : sort by price ascending
                b : sort by price Descending
            `);
            var sort = prompt('Enter type of sort ')
            priceSort(sort)
            showPrompt = false
            break;

        default:
            break;
    }
    showPrompt = true
}
//! function show books list
function showListBook(books) {
    if(books.length != 0){
    books.forEach((item) =>{
        console.log(`
            Book Name : ${item.name}
            Book Author : ${item.author}
            Book Price : ${item.price}
        `);
    })
    }
    else console.log('Sorry !! your Books is empty');
}
//! function search in books names
function searchBook(searchKey) {
    searchKey = pascalCase(searchKey)
    const searchBook = []
    var isFind = false
    books.forEach((item) =>{
        if(item.name.indexOf(searchKey) != -1){
            searchBook.push(item)
            isFind = true
        }
    })
    if(isFind){ 
        showBook(searchBook)
        borrowBook(searchBook)
    }
    else console.log('Your Book Not Founded');
}
function showBook(books) {
    for(var i = 0;i < books.length;i++)
    {
        console.log(`
            ${i+1}
                book name : ${books[i].name}
                book author : ${books[i].author}
                book price : ${books[i].price}
        `);
    }
    
}
//! function search in books Author
function searchAuthorProcess(author) {
    author = pascalCase(author)
    const searchAuthor = []
    var isFind = false
    books.forEach((item) =>{
        if(item.author.indexOf(author) != -1){
            searchAuthor.push(item)
        }
    })
    if(isFind)showAuthor(searchAuthor)
    else console.log('Your Author Not Founded');
}
function showAuthor(showAuthor){
    for(var i = 0;i < showAuthor.length;i++)
    {
        console.log(`
            ${i+1}
                book name : ${showAuthor[i].name}
                book author : ${showAuthor[i].author}
                book price : ${showAuthor[i].price}
        `);
    }
    
}
//! function sort books by Price
function priceSort(typeOfSort) {
    //! function sort books by Price Ascending
    if(typeOfSort === 'a' || typeOfSort === 'A'){
        var bookSortAscending = books.sort((a,b) => a.price - b.price)
        bookSortAscending.forEach((item) => {
            console.log(`
            
                book name : ${item.name}
                book author : ${item.author}
                book price : ${item.price}
        `);
        })
        
    }
    //! function sort books by Price Ascending
    if(typeOfSort === 'b' || typeOfSort === 'B'){
        var bookSortDescending = books.sort((a,b) => b.price - a.price)
        bookSortDescending.forEach((item) => {
            console.log(`
            
                book name : ${item.name}
                book author : ${item.author}
                book price : ${item.price}
        `);
        })
    }
}
function borrowBook(books) {
    var bookkey = Number(prompt(`Enter BookKey for Borrow || type "-1" to exit if you dont wana Borrow: `))
    if(bookkey != -1){
        if(bookkey <= books.length) {
            myBooks.push(books[bookkey-1]);
            console.log('This Book Successfuly aded to your books you can find this book at menu ==> D');
        }
        else console.log('Your BookKey Is InValied');
    }
}
//! function Pascal search for b and c items
function pascalCase(string){
    var stringArray = string.split(' ')
    const pascalString = stringArray.map((item) => {
        item = item.toLowerCase()
        item = item[0].toUpperCase() + item.substr(1,item.length)
        return item
    });
    return pascalString.join(' ')
}



























