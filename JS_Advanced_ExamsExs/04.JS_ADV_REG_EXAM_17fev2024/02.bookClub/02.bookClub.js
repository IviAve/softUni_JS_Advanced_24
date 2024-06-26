class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const bookExists = this.books.some(book => book.title === title && book.author === author);
        if (bookExists) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        const memberExists = this.members.includes(memberName);
        if (!memberExists) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const bookIndex = this.books.findIndex(book => book.title === bookTitle);
        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const assignedBook = this.books.splice(bookIndex, 1)[0];
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }

        if (this.books.length === 0) {
            return "No available books in the library.";
        }

        const availableBooks = this.books.map(book => `"${book.title}" by ${book.author}`).join("\n");
        return `Available Books in ${this.library} library:\n${availableBooks}`;
    }
}


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));
 
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());





// Functionality
// Constructor
// Should have these 3 properties:
// •	library – String
// •	books – Array (empty)
// •	members – Array (empty)
// The constructor should accept the initial library name when the BookClub is initialized.
// addBook (title, author)
// Both title and author are of type string.
// If the book is already in the books array, return:
// "The book "{title}" by {author} is already in {library} library."

// •	Otherwise, this function should add the book with the properties: 
// title and author to the books array, and return:
// "The book "{title}" by {author} has been added to {library} library."

// addMember (memberName)
// The memberName is of type string.
// •	If the member is already a part of the book club, return:
// "Member {memberName} is already a part of the book club."
// •	Otherwise, this function should add the member  to the members array and return:
// 	"Member {memberName} has been joined to the book club."

// assignBookToMember (memberName, bookTitle) 
// •	If the memberName is not found in members array, throw an Error:
// "Member {memberName} not found."
// •	If the bookTitle is not found in books array, throw an Error:
// "Book "{bookTitle}" not found."
// •	Otherwise, this function should remove the book from the books array, and return: 
// "Member {memberName} has been assigned the book "{assignedBook}" by {author}."

// generateReadingReport ()
// This method should return the complete information about the book club: 
// •	If the club does not have any members, return:
// 	"No members in the book club."
// •	If there are no available books, return:
// "No available books in the library."

// •	Otherwise return:
// "Available Books in {library} library:"
// •	And on the new line, display information about each book in the club library:
// ""{book}" by {author}"