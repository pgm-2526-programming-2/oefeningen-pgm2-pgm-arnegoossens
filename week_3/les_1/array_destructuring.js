// Ophalen van waardes uit een array/object en die opslaan in een variabele
const person = ["Arne", "Goossens"];
const firstName = person[0];
const lastName = person[1];

// Destructuring
const [firstN, lastN, middleN = "test"] = person;
console.log(firstN, lastN, middleN);

const results = ["Ignace", "Arif", "Kobe", "Justin"];
const [firstWinner, , thirdWinner] = results;

console.log(firstWinner, thirdWinner);

const songs = [
    {
        name: "Ophelia",
        artist: "Taylor Swift"
    },
    {
        name: "Still DRE",
        artist: "Snoop Dogg"
    }
]

const [, firstTrack, lastTrack] = songs; // Let op de komma!
console.log(lastTrack); // undefined

// Combinatie van de rest operator en destructuring
// Doel: array opsplitsen in eerste element en de rest
const [head, ...tail] = [1,2,3,4,5,6];
console.log(head, tail);