const myLibrary  = []

function bookConstructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBooks(title, author, pages, status) {

    const newBookObject = new bookConstructor(title, author, pages, status);

    myLibrary.push(newBookObject);

    // return myLibrary; // unecessary - push already executed
}

addBooks("Merchant of Nolita", "Shakespeare", "320", "unread")
console.log(myLibrary)

const userEntry = ["Hotrod", "Dean Callaghan", "530", "unread"]

addBooks(...userEntry)
console.log(myLibrary)

