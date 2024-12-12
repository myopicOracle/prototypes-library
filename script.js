const myLibrary  = []

function bookConstructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function takesArguments(title, author, pages, status) {

    const newBookObject = new bookConstructor(title, author, pages, status);

    myLibrary.push(newBookObject);

    return myLibrary;
}

takesArguments("Merchant of Nolita", "Shakespeare", "320", "unread")

console.log(myLibrary)

function objectSpreader(details) {
    takesArguments(details)
}

const userEntry = ["Hotrod", "Dean Callaghan", "530", "unread"]
    console.log(takesArguments(...userEntry))
