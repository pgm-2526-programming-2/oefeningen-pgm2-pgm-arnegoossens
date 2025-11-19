const firstName = "Jan";
const age = 20;
const isStudent = true;
const hobbies = ['Gaming', 'Soccer'];
const address = {
    street: 'New York Straat',
    number: 4
}

const nickname = firstName;
const interests = hobbies;

interests.push("Kitesurfen");

console.log(interests);

let total = 0;

function addFiveToNumber(a = 0){
    console.log(a + 5);
}

addFiveToNumber(2);