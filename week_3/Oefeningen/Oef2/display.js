function displayBooks(books) {
    console.log("Boekenlijst:");
    console.log("============");
    books.forEach((book) =>
        console.log(
            `ID: ${book.id}, Titel: ${book.title}, Auteur: ${book.author}, Genre: ${book.genre}`
        )
    );
}

function displayMembers(members) {
    console.log("\nLedeninformatie:");
    console.log("=================");
    members.forEach((member) =>
        console.log(
            `ID: ${member.id}, Naam: ${member.name}, Lidmaatschap: ${member.membershipType}`
        )
    );
}

function displayLoans (loans, books, members) {
    console.log("\nUitleningen:");
    console.log("============");
    loans.forEach((loan) => {
        const book = books.find((b) => b.id === loan.bookId);
        const member = members.find((m) => m.id === loan.memberId);
        console.log(
            `Boek: ${book.title}, Lid: ${member.name}, Vervaldatum: ${loan.dueDate}, Geretourneerd: ${loan.returned}`
        );
    });
}

function displayLoansPerMember(loansPerMember, members){

    console.log("\nAantal uitgeleende boeken per lid:");
    console.log("==================================");
    Object.keys(loansPerMember).forEach((memberId) => {
        const member = members.find((m) => m.id == memberId);
        console.log(`${member.name}: ${loansPerMember[memberId]} boeken`);
    });
}

module.exports = {
    displayBooks,
    displayMembers,
    displayLoans,
    displayLoansPerMember
}