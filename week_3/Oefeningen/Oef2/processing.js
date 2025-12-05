function returnedBooks(loans, ...indexes){
    for (const i of indexes) {
        loans[i].returned = true;
    }
}

function calculateLoansPerMember(loans){
    const loansPerMember = {};
    loans.forEach((loan) => {
        loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
    });
    return loansPerMember;
}

module.exports = {
    returnedBooks,
    calculateLoansPerMember
}