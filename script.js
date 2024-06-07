function Books(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function()
    {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

let book1 = new Books("The Hobbit","J.R.R. Tolkien",295,'Read');

let myLibrary = [];

function addBookToLibrary(book) 
{
    myLibrary.push(book)
}
let booksDiv = document.createElement('div');
booksDiv.classList.add('booksMain')


let header = document.querySelector('.header')
let button = document.querySelector("button");

let mainButton = document.querySelector('.mainButton')
let booksGrid = document.createElement("div");
let read = document.createElement("input");
let readLabel = document.createElement("label");

booksGrid.classList.add("booksGrid")
document.body.appendChild(booksGrid);

addBookToLibrary(book1) 
for (let i = 0; i < myLibrary.length; i++) 
{
    let eachBook = document.createElement('div')
    eachBook.classList.add('book')
    document.body.appendChild(booksDiv);
    let titleDiv = document.createElement('div');
    titleDiv.innerHTML=book1.title ;
    let authorDiv = document.createElement('div');
    authorDiv.innerHTML=book1.author
    let pagesDiv = document.createElement('div');
    pagesDiv.innerHTML=book1.pages
    eachBook.classList.add('book')
    let readDiv = document.createElement('div');
    readDiv.innerHTML= book1.read;
    readDiv.classList.add('readDiv')
    eachBook.appendChild(titleDiv);
    eachBook.appendChild(authorDiv);
    eachBook.appendChild(pagesDiv);
    eachBook.appendChild(readDiv);
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    eachBook.appendChild(deleteButton);
    booksDiv.appendChild(eachBook);
    deleteButton.addEventListener('click', function () {
    eachBook.remove()
})
}











mainButton.addEventListener("click",function()
{
    let readStatus = "Not Read"
    let submitButton = document.createElement('button')
    header.classList.add("inner-header")    
    let titleForm = document.createElement('div');
    titleForm.classList.add("innerForm")
    let newForm = document.createElement("form");
    newForm.classList.add("forms");
    document.body.appendChild(newForm);
    booksGrid.appendChild(newForm);
    let title = document.createElement("input");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","title")
    titleLabel.innerHTML="Title";
    title.setAttribute("id","title");
    title.setAttribute("type","text");
    title.required = true;
    let author = document.createElement("input");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for","author")
    authorLabel.innerHTML="Author";
    author.setAttribute("id","author");
    author.setAttribute("type","text")
    author.required = true;
    let pages = document.createElement("input");
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for","pages")
    pagesLabel.innerHTML="Pages";
    pages.setAttribute("id","pages");
    pages.setAttribute("type","number")
    pages.required = true;
    titleForm.appendChild(titleLabel);
    titleForm.appendChild(title);
    newForm.appendChild(titleForm);
    let authorForm = document.createElement('div');
    authorForm.classList.add("innerForm")
    authorForm.appendChild(authorLabel);
    authorForm.appendChild(author);
    newForm.appendChild(authorForm)
    readLabel.setAttribute('for','read')
    readLabel.innerHTML="Read";
    read.setAttribute("id","read"); 
    read.setAttribute("type","checkbox");
    read.addEventListener('click',function(){
        readStatus = "Read"
    })
    let pagesForm = document.createElement('div');
    pagesForm.classList.add("innerForm")
    pagesForm.appendChild(pagesLabel);
    pagesForm.appendChild(pages);
    newForm.appendChild(pagesForm)  
    let readForm = document.createElement('div')
    readForm.classList.add("read")
    readForm.appendChild(readLabel);
    readForm.appendChild(read);
    newForm.appendChild(readForm) 
    submitButton.setAttribute('type','submit')
    submitButton.setAttribute('value','Add Book')
    submitButton.innerHTML ="Add Book"
    submitButton.classList.add('submitButton')
    newForm.appendChild(submitButton)
    let eachBook = document.createElement('div')
    eachBook.classList.add('book')
    document.body.appendChild(booksDiv);
    newForm.addEventListener('submit', function () {
            let titleDiv = document.createElement('div');
            titleDiv.innerHTML=title.value ;
            let authorDiv = document.createElement('div');
            authorDiv.innerHTML=author.value
            let pagesDiv = document.createElement('div');
            pagesDiv.innerHTML=pages.value
            let eachBook = document.createElement('div')
            eachBook.classList.add('book')
            let readDiv = document.createElement('div');
            readDiv.innerHTML= readStatus;
            readDiv.classList.add('readDiv')
            eachBook.appendChild(titleDiv);
            eachBook.appendChild(authorDiv);
            eachBook.appendChild(pagesDiv);
            eachBook.appendChild(readDiv);
            let deleteButton = document.createElement('button')
            deleteButton.classList.add('deleteButton')
            eachBook.appendChild(deleteButton);
            booksDiv.appendChild(eachBook);
            deleteButton.addEventListener('click', function () {
                eachBook.remove()
            })
            newForm.reset();    
    event.preventDefault();
})
})




