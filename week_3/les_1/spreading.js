// Operators
// < > === != etc

// Spread en Rest operator
// Drie puntjes: ...
const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

//Reden om te spreaden
// 1. Kopie maken van een referentie datatype
const students = ["Mert", "Yet"];
students.push("Milana");
const friends = students;
const people = [...students]; // ["Mert", "Yet", "Milana"]
// Er is dus geen referentie meer tussen de arrays

// 2. Arrays samen voegen
const drinks = ["Pintje", "Gin", "Mocktail"];
const snacks = ["Frikandel", "Chips"];

const menu = [...drinks, "Cola", ...snacks];

// 3. Wanneer een methode geen arrays aanvaard
Math.max(1, 5, 6, 3, 8);
Math.max(...numbers);

//Dit werkt ook allemaal met objecten
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
}
const upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom uitlaat"]
}

car.upgrade = upgrade;

const upgradedCar = {
    ...car,
    ...upgrade
}

//Object keys advanced syntax
const a = "Hello";
const obj = {
    a
} 

