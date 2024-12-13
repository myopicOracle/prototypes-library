// ============ Object Constructor Function ==========

const myLibrary  = [];

function bookConstructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBooks(title, author, pages, isRead) {
    const newBookObject = new bookConstructor(title, author, pages, isRead);
    myLibrary.push(newBookObject);
}

// ============ For Retrieving Values of Form Inputs ==========

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("isRead");

const bookContainer = document.getElementById("container")

// ============ Creates Book Element and Adds to Display Grid ==========

function appendToDisplay(title, author, pages, isRead) {

    const cardContainer = document.createElement("div")

    const createTitle = document.createElement("div")
    const createAuthor = document.createElement("div")
    const createPages = document.createElement("div")
    const createStatus = document.createElement("div")

    createTitle.textContent = title;
    createTitle.setAttribute("style", "border: 1px solid blue; flex: 1;")
    cardContainer.appendChild(createTitle);

    createAuthor.textContent = author;
    createAuthor.setAttribute("style", "border: 1px solid blue; flex: 1;")
    cardContainer.appendChild(createAuthor);

    createPages.textContent = pages;
    createPages.setAttribute("style", "border: 1px solid blue; flex: 1;")
    cardContainer.appendChild(createPages);

    createStatus.textContent = isRead;
    createStatus.setAttribute("style", "border: 1px solid blue; flex: 1;")
    cardContainer.appendChild(createStatus);
    
    cardContainer.setAttribute("style", "border: 2px solid red; display:flex; flex-flow: column wrap;")
    bookContainer.appendChild(cardContainer)
}

// ============ Function Called When Form Submit CLicked ==========      

    function handleClick() {
        addBooks(titleInput.value, authorInput.value, pagesInput.value, statusInput.value); 
        appendToDisplay(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
    }

// ============ Retrieve User Input as Array ==========

