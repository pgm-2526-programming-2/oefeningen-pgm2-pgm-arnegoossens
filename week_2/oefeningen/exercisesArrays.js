// Oefening 1
const weekdays = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

// console.log(weekdays.join(", "));

// Oefening 2
let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
// console.log(fruits.length); // ?

//Oefening 3
const matrix = [
    [8, 7, 6],
    [3, 4, 5]
]

function showMatrixRecord (matrixAr, row, col){
    console.log(matrixAr[row-1][col-1]);
}

// showMatrixRecord(matrix, 1, 3);

//Oefening 4
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    // console.log(number);
}
const hello = "Hello!";
for (const char of hello) {
    // console.log(char);
}
const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach((record) => {
    // console.log(record);
});

// Oefening 5
const woorden = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];
const woordenString = woorden.join(";");
// console.log(woordenString);
// console.log(woorden.some((value) => {
//     return value[1] === "b";
// }));
// woorden.unshift("Hello");
// console.log(woorden);
// console.log(woorden.every((value) => {
//     return value.length > 2;
// }));
// console.log(woorden.sort());
// console.log(woorden.at(2));
// const korteWoorden = woorden.filter((value) => {
//     return value.length < 5;
// })
// console.log(korteWoorden);

// Oefening 6
const willekeurigeGetallen = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
);
// console.log(willekeurigeGetallen);
const willekeurigeGetallenSmall = willekeurigeGetallen.filter((value) => {
    return value < 10;
})
// console.log(willekeurigeGetallenSmall);
willekeurigeGetallen.pop();
willekeurigeGetallen.shift();
willekeurigeGetallen.push(5);
// console.log(willekeurigeGetallen);
// console.log(
//     willekeurigeGetallen.every((value) => {
//         return value < 100; 
//     })
// );
const numberString = willekeurigeGetallen.join(" ");
// console.log(numberString);
const numberTotal = willekeurigeGetallen.reduce((prevNumber, curNumber) => {
    return prevNumber + curNumber;
})
// console.log(numberTotal);
const doubleNumbers = willekeurigeGetallen.map((value) => {
    return value * 2;
});
// console.log(doubleNumbers);
// console.log(willekeurigeGetallen.some((value) => {
//     return value > 30;
// }))

// Oefeningen 7
const willekeurigeNamenArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
// console.log(willekeurigeNamenArray.flat());
const deletedFirstRecordsArr = willekeurigeNamenArray.map((subArr) => {
    subArr.shift();
    return subArr;
})
// console.log(deletedFirstRecordsArr);

// Oefening 8
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function sumArrays(ar1, ar2){
    return ar1.map((value, i) => {
        return value + ar2[i];
    });
}
// console.log(sumArrays(array1, array2));

// Oefening 9
let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];
let langsteWoord = console.log(woordenArray.reduce((prevRec, curRec) => {
    return prevRec.length > curRec.length ? prevRec : curRec;
}));

// Oefening 10
function filterEvenGetallen(getallen) {
    return getallen.filter((value) => {
        return value % 2 === 0;
    });
}

const willekeurigeGetallenAlt = [3, 8, 15, 6, 10, 7];
const evenGetallen = filterEvenGetallen(willekeurigeGetallenAlt);
// console.log(evenGetallen); // geeft [8, 6, 10]

// Oefeningen 11
function sorterenOpEigenschap(objecten, eigenschap) {
    return objecten.sort((a,b) => a[eigenschap] - b[eigenschap]);
}
let objectenArray = [
    { naam: 'Anna', leeftijd: 30 },
    { naam: 'Bob', leeftijd: 25 },
    { naam: 'Charlie', leeftijd: 35 },
];
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, 'leeftijd');
// console.log(gesorteerdOpNaam);

// Oefening 12
function kruiswoordCheckSingleArray(ar, word){
    const arRow = ar.join("");
    return arRow.indexOf(word);
}

function kruiswoordWordsInRows(crossword, wordList){
    let foundWords = "";
    for (i = 0; i < crossword.length; i++) {
        for (const word of wordList) {
            const startCol = kruiswoordCheckSingleArray(crossword[i], word);
            if (startCol >= 0){
                foundWords += `(${i},${startCol}: ${word})
`;
            }
        }
    }
    return foundWords;
}

function kruiswoordChecker(crossword, wordList) {
    //Check horizontal
    let foundWords = `--- Horizontal ---
`;
    foundWords += kruiswoordWordsInRows(crossword, wordList);

    //Check vertical
    const flippedCrossword = crossword.map((row, rowIndex) => {
        return row.map((char, colIndex) => {
            return crossword[colIndex][rowIndex]
        });
    });

    foundWords += `--- Vertical ---
`;
    foundWords += kruiswoordWordsInRows(flippedCrossword, wordList);

    return foundWords;
}

let kruiswoord = [
    ['h', 'a', 'p', 'p', 'y'],
    ['e', ' ', ' ', ' ', ' '],
    ['l', ' ', 'a', 'c', 'e'],
    ['l', ' ', ' ', ' ', ' '],
    ['o', ' ', ' ', ' ', ' ']
];

let woordenlijst = ['hello', 'ace', 'happy'];
console.log(kruiswoordChecker(kruiswoord, woordenlijst));

// Oefening 14
function transpose(matrix) {
    return matrix.map((row, rowIndex) => {
        return row.map((char, colIndex) => {
            return matrix[colIndex][rowIndex]
        });
    });
}
let voorbeeldMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(transpose(voorbeeldMatrix));

//Oefening 15
function fibonacci(limit, list = [0, 1]) {
    const nextNumber = list.at(-1) + list.at(-2);
    if(limit > nextNumber) {
        list.push(nextNumber);
        fibonacci(limit, list);
    }
    return list;
}
console.log(fibonacci(100));