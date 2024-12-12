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

// ============ Basic AddBooks Function ==========

// get user input for all 4 values with forms

// push user input into array object 

// spread array into addBooks() function

// console log myLibrary array



    //Example
    const userEntry = ["Hotrod", "Dean Callaghan", "530", "unread"]

    addBooks(...userEntry)
    console.log(myLibrary)



// ============ Retrieve User Input as Array ==========
