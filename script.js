////Pseudocode/////////////////////////////////////////////////////////////////////

// 1. Get user inputs from DOM Form
// 2. Pass inputs to constructor  
// 3. Create new book object using constructor 
// 4. Add new book object to Library array

// 5. Take new array item, create DOM element 
// 6. Add item properties to newly created element
// 7. Append element to display 
// 8. Clear inputs

////Global Variables/////////////////////////////////////////////////////////////////

const bookContainer = document.getElementById("container");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("isRead");

const myLibrary  = [];

////Class Modules////////////////////////////////////////////////////////////////////

class Book {
    constructor (title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
        this.newBook = {title, author, pages, isRead}
        this.bookArray = myLibrary.push(this.newBook) 
    }
}


class addBookAPI extends Book {
    constructor(title, author, pages, isRead) {
        super(title, author, pages, isRead)
        this.Container = document.createElement("div")
        this.Cover = document.createElement("img")
        this.Title = document.createElement("div")
        this.Author = document.createElement("div")
        this.Pages = document.createElement("div")
        this.Status = document.createElement("div")
        this.Delete = document.createElement("button")
    }

    #appendCover() {
        this.Cover.setAttribute("src", "./images/3d-spellbook.png")
        this.Cover.setAttribute("style", "height: 80px; width: 80px; margin: 5px; align-self: center; flex: 0 0 auto;")
        this.Container.appendChild(this.Cover);
        return this
    }

    #appendTitle() {
        this.Title.textContent = `"${this.title}"`;
        this.Title.setAttribute("class", "card content")
        this.Title.setAttribute("style", "font-size: 10px; font-weight: 700; padding-left: 5px; flex: 1;")
        this.Container.appendChild(this.Title);
        return this
    }

    #appendAuthor() {
        this.Author.textContent = this.author;
        this.Author.setAttribute("class", "card content")
        this.Author.setAttribute("style", "font-size: 9.5px; font-style: italic; padding-left: 5px; flex: 1;")
        this.Container.appendChild(this.Author);
        return this
    }

    #appendPages() {
        this.Pages.textContent = `${this.pages} pages`;
        this.Pages.setAttribute("class", "card content")
        this.Pages.setAttribute("style", "font-size: 9px; text-align: center; padding-left: 5px; flex: 1;")
        this.Container.appendChild(this.Pages);
        return this
    }

    #appendStatus() {
        this.Status.textContent = `Status: ${this.isRead}`;
        this.Status.setAttribute("class", "card content")
        this.Status.setAttribute("style", "font-size: 9px; text-align: center; padding-left: 5px; flex: 1;")
        this.Container.appendChild(this.Status);
        return this
    }

    #appendDelete() {
        this.Delete.textContent = "Delete"
        this.Delete.setAttribute("onclick", "this.parentElement.remove()")
        this.Delete.setAttribute("style", "font-size: 12px; margin-bottom: 4px; border-top: 1px solid #C4C9B9; flex: 0 1 auto; align-self: center;")
        this.Container.appendChild(this.Delete);
        return this
    }

    #appendContainer() {
        this.Container.setAttribute("class", "book card")
        bookContainer.appendChild(this.Container)
        return this
    }
    
    #clearInputs() {
        titleInput.value = "";
        authorInput.value = ""; 
        pagesInput.value = ""; 
        statusInput.value = ""; 
        return this;
    }

    appendAPI() {
        this.#appendCover()
        this.#appendTitle()
        this.#appendAuthor()
        this.#appendPages()
        this.#appendStatus()
        this.#appendDelete()
        this.#appendContainer()
        this.#clearInputs()
    }

}

////Form Submit Action//////////////////////////////////////////////////////////////

const handleClick = function() {
    new addBookAPI(
        titleInput.value, 
        authorInput.value, 
        pagesInput.value, 
        statusInput.value
    )
    .appendAPI();
}

////Testing/////////////////////////////////////////////////////////////////////////

// const harryPotter = new addBookAPI("Harry Potter", "JK Rowling", 637, "read").appendAPI()
// const harryPotter1 = new addBookAPI("Harry Potter", "JK Rowling", 637, "read").appendAPI()
// const harryPotter2 = new addBookAPI("Harry Potter", "JK Rowling", 637, "read").appendAPI()

// console.log(harryPotter)
// console.log(myLibrary)

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////