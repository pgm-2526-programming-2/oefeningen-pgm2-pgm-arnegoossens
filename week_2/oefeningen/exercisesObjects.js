// Oefening 1
const auto = {
    merk: "Toyota",
    model: "Camry",
    jaar: 2022,
    kleur: "blauw"
}
// 1.1
auto.kleur = "rood";
//1.2
console.log(auto.merk);
//1.3
auto.brandstof = "benzine";
//1.4
delete auto.jaar;
console.log(auto);

// Oefening 2
const persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville" }
}
//2.1
console.log(persoon.adres.nummer);
//2.2
persoon.telefoon = "0491/00.00.00";
//2.3
const extraInfo = {
    hobbies: ["lopen", "lezen", "hockey"],
    favorieteKleur: "groen"
}
persoon.extraInfo = extraInfo;
console.log(persoon);

// Oefening 3
function zijnObjectenIdentiek(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true

// Oefening 4
const shoppingCart = {
    item1: { name: "Product 1", price: 20 },
    item2: { name: "Product 2", price: 30 },
    item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
// const itemPrices = Object.values(shoppingCart).map((item) => {
//     return item.price;
// });
const itemPrices = Object.values(shoppingCart);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart);
console.log("Namen en prijzen van items:", itemEntries);
