class Books {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, " +
        this.read
      );
    };
  }

  changeStatus() {
    if (this.read == "Read") {
      this.read = "Not Read";
      return this.read;
    } else {
      this.read = "Read";
      this.read;
    }
  }
}

// let book1 = new Books("The Hobbit", "J.R.R. Tolkien", 295, "Read");
let myLibrary = [];

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }
//  let booksDiv = document.createElement('div');
//  booksDiv.classList.add('booksMain')

let header = document.querySelector(".header");
// let button = document.querySelector("button");

let mainButton = document.querySelector(".mainButton");
let booksGrid = document.querySelector(".booksGrid");
let booksMain = document.querySelector(".booksMain");
// let read = document.createElement("input");
let readLabel = document.createElement("label");

let switchNew = document.createElement("label");
switchNew.classList.add("switch");
let inputCheckBox = document.createElement("input");

inputCheckBox.setAttribute("type", "checkbox");
let slider = document.createElement("span");
slider.classList.add("slider");
inputCheckBox.setAttribute("id", "read");
switchNew.setAttribute("for", "read");
// booksGrid.classList.add("booksGrid")
// document.body.appendChild(booksGrid);

function placeDivs(book) {
  for (let i = 0; i < myLibrary.length; i++) {
    let eachBook = document.createElement("div");
    eachBook.classList.add("book");
    document.body.appendChild(booksMain);
    let titleDiv = document.createElement("div");
    titleDiv.innerHTML = book.title;
    let authorDiv = document.createElement("div");
    authorDiv.innerHTML = book.author;
    let pagesDiv = document.createElement("div");
    pagesDiv.innerHTML = book.pages;
    eachBook.classList.add("book");

    console.log(book.read);
    let switchNew = document.createElement("label");
    switchNew.classList.add("switch");
    let inputCheckBox = document.createElement("input");
    inputCheckBox.setAttribute("type", "checkbox");
    let slider = document.createElement("span");
    slider.classList.add("slider");
    switchNew.appendChild(inputCheckBox);
    switchNew.appendChild(slider);
    eachBook.appendChild(titleDiv);
    eachBook.appendChild(authorDiv);
    eachBook.appendChild(pagesDiv);
    eachBook.appendChild(switchNew);
    if (book.read == "Read") {
      inputCheckBox.click();
    }
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    eachBook.appendChild(deleteButton);
    booksMain.appendChild(eachBook);
    deleteButton.addEventListener("click", function () {
      eachBook.remove();
    });
  }
}

mainButton.addEventListener("click", function () {
  let submitButton = document.createElement("button");
  header.classList.add("inner-header");
  let titleForm = document.createElement("div");
  titleForm.classList.add("innerForm");
  let newForm = document.createElement("form");
  newForm.classList.add("forms");
  document.body.appendChild(newForm);
  booksGrid.appendChild(newForm);
  let title = document.createElement("input");
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "Title";
  title.setAttribute("id", "title");
  title.setAttribute("type", "text");
  title.required = true;
  title.minLength = 2;
  let author = document.createElement("input");
  let authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author");
  authorLabel.innerHTML = "Author";
  author.setAttribute("id", "author");
  author.setAttribute("type", "text");
  author.required = true;
  author.minLength = 3;
  let pages = document.createElement("input");
  let pagesLabel = document.createElement("label");
  pagesLabel.setAttribute("for", "pages");
  pagesLabel.innerHTML = "Pages";
  pages.setAttribute("id", "pages");
  pages.setAttribute("type", "number");
  pages.required = true;
  pages.min = 1;
  titleForm.appendChild(titleLabel);
  titleForm.appendChild(title);
  newForm.appendChild(titleForm);
  let authorForm = document.createElement("div");
  authorForm.classList.add("innerForm");
  authorForm.appendChild(authorLabel);
  authorForm.appendChild(author);
  newForm.appendChild(authorForm);

  readLabel.setAttribute("for", "read");
  readLabel.innerHTML = "Not Read";

  let readStatus = readLabel.innerHTML;

  let pagesForm = document.createElement("div");
  pagesForm.classList.add("innerForm");
  pagesForm.appendChild(pagesLabel);
  pagesForm.appendChild(pages);
  newForm.appendChild(pagesForm);
  let readForm = document.createElement("div");
  readForm.classList.add("read");
  readForm.appendChild(readLabel);
  switchNew.appendChild(inputCheckBox);
  switchNew.appendChild(slider);
  readForm.appendChild(switchNew);
  //   let book = new Books(title.value, author.value, pages.value, readStatus);
  inputCheckBox.addEventListener("click", function () {
    if (readLabel.innerHTML == "Not Read") {
      readStatus = "Read";
    } else {
      readStatus = "Not Read";
    }
  });

  newForm.appendChild(readForm);
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add Book");
  submitButton.innerHTML = "Add Book";
  submitButton.classList.add("submitButton");
  newForm.appendChild(submitButton);
  let eachBook = document.createElement("div");
  eachBook.classList.add("book");
  newForm.addEventListener("submit", function () {
    let book = new Books(title.value, author.value, pages.value, readStatus);
    console.log(book);
    let titleDiv = document.createElement("div");
    titleDiv.innerHTML = book.title;
    let authorDiv = document.createElement("div");
    authorDiv.innerHTML = book.author;
    let pagesDiv = document.createElement("div");
    pagesDiv.innerHTML = book.pages;
    let eachBook = document.createElement("div");
    eachBook.classList.add("book");
    let switchNew = document.createElement("label");
    switchNew.classList.add("switch");
    let inputCheckBox = document.createElement("input");
    inputCheckBox.setAttribute("type", "checkbox");
    let slider = document.createElement("span");
    slider.classList.add("slider");
    switchNew.appendChild(inputCheckBox);
    switchNew.appendChild(slider);

    if (readStatus == "Read") {
      switchNew.click();
      readStatus = book.changeStatus();
    }
    switchNew.addEventListener("click", function () {
      readStatus = book.changeStatus();
    });

    booksMain.appendChild(eachBook);
    eachBook.appendChild(titleDiv);
    eachBook.appendChild(authorDiv);
    eachBook.appendChild(pagesDiv);

    eachBook.appendChild(switchNew);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    eachBook.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      eachBook.remove();
    });
    newForm.reset();
    event.preventDefault();
  });
});
