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

    const createCover = document.createElement("img")
    const createTitle = document.createElement("div")
    const createAuthor = document.createElement("div")
    const createPages = document.createElement("div")
    const createStatus = document.createElement("div")
    const createDelete = document.createElement("button")

    createCover.setAttribute("src", "./images/3d-spellbook.png")
    createCover.setAttribute("style", "height: 80px; width: 80px; margin: 5px; align-self: center; flex: 0 0 auto;")
    cardContainer.appendChild(createCover);
    
    createTitle.textContent = `"${title}"`;
    createTitle.setAttribute("class", "card content")
    createTitle.setAttribute("style", "font-size: 10px; font-weight: 700; padding-left: 5px; flex: 1;")
    cardContainer.appendChild(createTitle);

    createAuthor.textContent = author;
    createAuthor.setAttribute("class", "card content")
    createAuthor.setAttribute("style", "font-size: 9.5px; font-style: italic; padding-left: 5px; flex: 1;")
    cardContainer.appendChild(createAuthor);

    createPages.textContent = `${pages} pages`;
    createPages.setAttribute("class", "card content")
    createPages.setAttribute("style", "font-size: 9px; text-align: center; padding-left: 5px; flex: 1;")
    cardContainer.appendChild(createPages);

    createStatus.textContent = `Status: ${isRead.toUpperCase()}`;
    createStatus.setAttribute("class", "card content")
    createStatus.setAttribute("style", "font-size: 9px; text-align: center; padding-left: 5px; flex: 1;")
    cardContainer.appendChild(createStatus);
    
    createDelete.textContent = "Delete"
    createDelete.setAttribute("onclick", "this.parentElement.remove()")
    createDelete.setAttribute("style", "font-size: 12px; margin-bottom: 4px; border-top: 1px solid #C4C9B9; flex: 0 1 auto; align-self: center;")
    cardContainer.appendChild(createDelete);
    
    cardContainer.setAttribute("class", "book card")
    bookContainer.appendChild(cardContainer)
}

// ============ Function Called When Form Submit CLicked ==========      

    function handleClick() {
        addBooks(titleInput.value, authorInput.value, pagesInput.value, statusInput.value); 
        appendToDisplay(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
        titleInput.value = "";
        authorInput.value = ""; 
        pagesInput.value = ""; 
        statusInput.value = ""; 
    }