function generateBooks(){
    const books = [];

    // Boeken toevoegen
    books.push({
        id: 1,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
    });
    books.push({
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Drama",
    });
    books.push({
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
    });
    books.push({
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classics",
    });

    return books;
}

function generateMembers(){
    const members = [];

    // Leden toevoegen
    members.push({ id: 101, name: "Alice Johnson", membershipType: "Premium" });
    members.push({ id: 102, name: "Bob Smith", membershipType: "Basic" });
    members.push({ id: 103, name: "Eve Williams", membershipType: "Premium" });

    return members;
}

function generateLoans(){
    const loans = [];

    // Uitleningen uitvoeren
    loans.push({
        bookId: 1,
        memberId: 101,
        dueDate: "2023-05-01",
        returned: false,
    });
    loans.push({
        bookId: 2,
        memberId: 102,
        dueDate: "2023-04-15",
        returned: false,
    });
    loans.push({
        bookId: 3,
        memberId: 103,
        dueDate: "2023-06-01",
        returned: false,
    });

    return loans;
}

module.exports = {
    generateBooks,
    generateMembers,
    generateLoans
}