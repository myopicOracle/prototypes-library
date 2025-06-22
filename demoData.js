// Demo book data
export const demoBooks = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        pages: 223,
        isRead: "read"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 398,
        isRead: "unread"
    },
    {
        title: "Atlas Shrugged",
        author: "Ayn Rand",
        pages: 467,
        isRead: "read"
    },
    {
        title: "Manufacturing Consent",
        author: "Noam Chomsky",
        pages: 412,
        isRead: "unread"
    },
    {
        title: "The Fountainhead",
        author: "Ayn Rand",
        pages: 349,
        isRead: "read"
    },
    {
        title: "Thus Spoke Zarathustra",
        author: "Friedrich Nietzsche",
        pages: 327,
        isRead: "unread"
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 298,
        isRead: "read"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: 268,
        isRead: "unread"
    },
    {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        pages: 352,
        isRead: "read"
    },
    {
        title: "Gödel, Escher, Bach",
        author: "Douglas Hofstadter",
        pages: 487,
        isRead: "unread"
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        pages: 244,
        isRead: "read"
    },
    {
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
        pages: 365,
        isRead: "unread"
    },
    {
        title: "Capitalism and Freedom",
        author: "Milton Friedman",
        pages: 208,
        isRead: "read"
    },
    {
        title: "Failed States",
        author: "Noam Chomsky",
        pages: 322,
        isRead: "unread"
    },
    {
        title: "We the Living",
        author: "Ayn Rand",
        pages: 437,
        isRead: "read"
    },
    {
        title: "The Birth of Tragedy",
        author: "Friedrich Nietzsche",
        pages: 179,
        isRead: "unread"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        pages: 112,
        isRead: "read"
    },
    {
        title: "The Double Helix",
        author: "James D. Watson",
        pages: 226,
        isRead: "unread"
    },
    {
        title: "Cosmos",
        author: "Carl Sagan",
        pages: 384,
        isRead: "read"
    },
    {
        title: "Homo Deus",
        author: "Yuval Noah Harari",
        pages: 463,
        isRead: "unread"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 412,
        isRead: "read"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        isRead: "unread"
    },
    {
        title: "The Road to Serfdom",
        author: "Friedrich Hayek",
        pages: 294,
        isRead: "read"
    },
    {
        title: "Hegemony or Survival",
        author: "Noam Chomsky",
        pages: 278,
        isRead: "unread"
    },
    {
        title: "Anthem",
        author: "Ayn Rand",
        pages: 105,
        isRead: "read"
    },
    {
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        pages: 240,
        isRead: "unread"
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        pages: 194,
        isRead: "read"
    },
    {
        title: "The Origin of Species",
        author: "Charles Darwin",
        pages: 459,
        isRead: "unread"
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        pages: 212,
        isRead: "read"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        pages: 443,
        isRead: "unread"
    }
];

// Track if demo books are currently displayed
let demoBooksDisplayed = false;
let demoBooksInstances = []; // Track created book instances

// Function to render demo books
function renderDemoBooks(books) {
    // Clear any existing demo books first
    removeDemoBooks();
    
    const container = document.getElementById('container');
    
    // Create and store new book instances
    demoBooksInstances = books.map(book => {
        const demoBook = new addBookAPI(
            book.title,
            book.author,
            book.pages,
            book.isRead
        );
        
        // Add demo class to the book container for styling
        demoBook.Container.classList.add('demo-book');
        
        // Append the book to the container
        container.appendChild(demoBook.Container);
        
        // Call appendAPI after adding to DOM to ensure proper rendering
        demoBook.appendAPI();
        
        return demoBook;
    });
    
    demoBooksDisplayed = true;
    updateDemoButton();
}

// Function to remove demo books
function removeDemoBooks() {
    if (!demoBooksDisplayed) return;
    
    // Remove all demo book elements from the DOM
    demoBooksInstances.forEach(book => {
        if (book.Container && book.Container.parentNode) {
            book.Container.parentNode.removeChild(book.Container);
        }
    });
    
    demoBooksInstances = [];
    demoBooksDisplayed = false;
    updateDemoButton();
}

// Update button text based on demo state
function updateDemoButton() {
    const toggleButton = document.getElementById('toggleDemo');
    if (toggleButton) {
        toggleButton.textContent = demoBooksDisplayed ? 'Remove Demo Books' : 'Load Demo Books';
    }
}

// Toggle demo books
function toggleDemoBooks() {
    if (demoBooksDisplayed) {
        removeDemoBooks();
    } else {
        renderDemoBooks(demoBooks);
    }
}

// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDemo');
    if (toggleButton) {
        // Remove any existing event listeners to prevent duplicates
        const newButton = toggleButton.cloneNode(true);
        toggleButton.parentNode.replaceChild(newButton, toggleButton);
        
        // Add new event listener
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDemoBooks();
        });
    }
});
