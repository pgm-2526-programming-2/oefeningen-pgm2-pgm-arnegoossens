// Oefening 1
const letters = ["A", "B", "C"];

const [firstLetter, secondLetter, thirdLetter] = letters;
// console.log(firstLetter, secondLetter, thirdLetter);

// Oefening 2
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const [[a, b, c]] = matrix;
// console.log(matrix);

// Oefening 3
let x = 5;
let y = 10;

// schrijf hier je code om x en y om te wisselen
[x, y] = [y, x];

// console.log(x, y); // Output: 10 5

// Oefening 4
const sentence = "This is a sentence.";
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
const [firstLetter2, ...restOfSentence] = sentence; 
// console.log(firstLetter2, restOfSentence.join("")); // Output: T his is a sentence.

//Oefening 5
function multiply([a, b]){
    console.log(a*b);
}

// multiply([3, 5]); // Output: 15
// multiply([7, 2]); // Output: 14

// Oefening 6
const numbers = [1, 2, 3, 4, 5];

// schrijf hier je code om de waarden toe te kennen aan variabelen
const [first, second, ...rest] = numbers;

// console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

// Oefening 7
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {name, age, address:{street, city}} = person;

// console.log(name, age, street, city);

// Oefening 8
const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {title="Unknown", author="Unknown", pages=0} = book;

// console.log(title, author, pages);

// Oefening 9
function printDetails({name="Jane", age=25, gender="Unknown"}) {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

// printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
// printDetails({ name: "Bob" }); // Output:  Name: Bob, Age: 25, Gender: Unknown

// Oefening 10
// Je code hier
function mergeOptions(obj1, obj2) {
    console.log({...obj1, ...obj2});
}

// Voorbeeldgebruik:
// mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }

// Oefening 11
const data = [1, [2, 3, [4, 5, 6, [7, 8, 9, 10, [11, 12]]]]];
const [, [firsta, , [, , , [seconda, , , , [, thirda]]]]] = data;

// console.log(firsta, seconda, thirda);