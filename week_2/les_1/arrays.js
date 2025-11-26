const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"];
const altGames = new Array();
Array.isArray(games); // true

const secondGame = games[1];
const altSecondGame = games.at(1);
const lastGame = games.at(-1);

const values = ["Adriaan", 
    function () {
        console.log("Hello!");
    }
];

const favoriteGames = [
    {
        name: "Super Mario Bros",
        releaseYear: 1980
    },
    {
        name: "Zelda",
        releaseYear: 1984
    }
];

const amountOfFavGames = favoriteGames.length;

games.length = 3; // verwijderd alle items behalve de eerste 3
const topThree = games;

games.length = 4; // maakt terug een leeg 4de item aan


const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);

console.log(typeof stringArray, typeof numbers);
// stringArray.push(5);
numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString);

const students = ["Nick", "Mert", "Jens"];
const people = ["Nick", "Mert", "Jens"];

console.log(students === people);

function areArraysEqual(ar1, ar2) {
    if(ar1.length === ar2.length){
        return false;
    }
    return JSON.stringify(ar1) === JSON.stringify(ar2);
}

areArraysEqual(students, people);

const matrix = [
    ['0','0','0','0'],
    ['0','x','0','0'],
    ['0','0','0','0'],
    ['0','0','0','0']
]

matrix[1][1];

const doubleNumbers = numbers.map((value, index) => {
    return value*2;
});

console.log(doubleNumbers);

//Reduce
const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
});

const products = [
    { name: "shirt", price: 20},
    { name: "shoes", price: 50},
    { name: "hat", price: 15}
]

const totalSales = products.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price;
}, 0);

console.log(totalSales);