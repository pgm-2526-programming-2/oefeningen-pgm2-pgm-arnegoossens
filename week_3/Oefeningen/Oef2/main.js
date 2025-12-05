const {generateBooks, generateMembers, generateLoans} = require("./data");
const {returnedBooks, calculateLoansPerMember} = require("./processing");
const {displayBooks, displayMembers, displayLoans, displayLoansPerMember} = require("./display");
// Ongeorganiseerd en complex script voor bibliotheekbeheer
const books = generateBooks();
const members = generateMembers();
const loans = generateLoans();

// Simuleer enkele boeken die zijn teruggebracht
returnedBooks(loans, 0, 2);

// Weergave van boeken
displayBooks(books);

// Weergave van leden
displayMembers(members);

// Weergave van uitleningen
displayLoans(loans, books, members);

// Bereken het aantal uitgeleende boeken per lid
const loansPerMember = calculateLoansPerMember(loans);

// Weergave van het aantal uitgeleende boeken per lid
displayLoansPerMember(loansPerMember, members);
