//Oefening 1
(() =>{
    const myVar = 15;
    function printVar() {
        console.log(myVar);
    };
    // printVar();
})();

//Oefening 2
function sumUpToN(n){
    let tempNumber = 0;
    for (let i = 1; i < n+1; i++) {
        tempNumber+=i;
    }
    return tempNumber;
}

// console.log(sumUpToN(3));

function recursiveSumUpToN(num, total = 0){
    if (num === 0){
        return total;
    }

    total += num;
    num--;

    return recursiveSumUpToN(num, total);
}

// console.log(recursiveSumUpToN(3));

//Oefening 3
function outerFunction(){
    const innerVar = 25;
    function innerFunction(){
        console.log(innerVar);
    }
    innerFunction();
}

// outerFunction();

//Oefening 4
function checkScoping(){
    const myVar = 50;
    if(true){
        const newVar = 75;
        console.log(myVar + " " + newVar);
    }
}
// checkScoping();

//Oefening 5
function power(base, exponent){
    if(exponent === 1){
        return base;
    }

    exponent--;
    return base * power(base, exponent);
}
console.log(power(3, 3));

//Oefening 6
function countAllNumbers(){
    let total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(countAllNumbers(3, 5, 2));
console.log(countAllNumbers(50, 10, 5, 1, 2));

//Oefening 7
function multiply(a, b){
    return a*b;
}
console.log(multiply(10, 20));

//Oefening 8
function greetUser(name, isFormal){
    if(isFormal){
        console.log(`Meneer ${name}`);
    } else {
        console.log(`Hoi ${name}!`);
    }
}
greetUser("Arne", true);
greetUser("Bavo", false);