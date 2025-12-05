// Selecteerd "de rest"
function sum(a, b, ...rest) {
    console.log(rest);
    return a + b + rest.reduce((prev, current) => prev + current, 0);
}

// Slaagt de rest van de items op in een array

// Rest operator is altijd binnen haakjes en als laatste parameter

console.log(sum(1,2,3,4));