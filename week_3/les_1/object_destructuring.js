// Object destructuring
const person = {
    firstName: "Arne",
    lastName: "Goossens",
    age: 24
}
const myFirstName = person.firstName;
const myLastName = person.lastName;
const myAge = person.age;

// const {firstName, lastName, age} = person;
// Object destructuring is op basis van de key. Niet de index!
const {firstName, age, gender = "Male"} = person;
console.log(age, gender); // 24 en undefined => default waarde meegegeven, dus gender word nu "Male"

// Nadeel van object destructuring, zelfde naam als key in object
const options = {
    c: 20000,
    w: 3000,
    mod: "C8",
    b: undefined
}
const {w:weight, c:cost, mod:model, b:brand = "Citroen"} = options; // Nieuwe variabel namen
console.log(brand);

const {w:altWeight, ...rest} = options;
console.log(rest);




const song = {
    name: "flowers",
    artist: "Miley"
}

const edit = {
    name: "7 Things"
}

function editSong(s, {name}) {
    s.name = name;
}
editSong(song, edit)
console.log(song);