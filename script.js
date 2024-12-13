const titleInput = document.getElementById("title")
const authorInput = document.getElementById("author")
const pagesInput = document.getElementById("pages")
const statusInput = document.getElementById("status")

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
}
addBooks("Merchant of Nolita", "Shakespeare", "320", "unread")

// Form Submit Action           
function handleClick() {
    
    // const title = titleInput.value
    // const author = authorInput.value
    // const pages = pagesInput.value
    // const status = statusInput.value

    addBooks(titleInput.value, authorInput.value, pagesInput.value, statusInput.value)
    
    // const addBook = {title, author, pages, status}
    
    // myLibrary.push(addBook)
    console.log(myLibrary)
}

console.log(myLibrary)







    //Example
    // const userEntry = ["Hotrod", "Dean Callaghan", "530", "unread"]

    // addBooks(...userEntry)
    // console.log(myLibrary)



// ============ Retrieve User Input as Array ==========

