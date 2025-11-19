function sum(a, b){
    return a + b;
}

const division = (a, b) => {return a/b}
const multiplier = function(a, b) {return a*b}

function selectRandomStudent(arr){
    return arr[Math.floor( Math.random() * arr.length )];
}

function showCalculation(number1 = 1, number2 = 0, calculation=sum){
    console.log(calculation(number1, number2));
}

showCalculation(1, 1, sum);
showCalculation(1, 1, multiplier);
showCalculation(10, 2, division);

showCalculation(undefined, 5, sum);


// Voorbeelden leerkracht
/* const age = 24;
const students = ["Yme", "Arne", "Mert"];

console.log(sum(age, 12));
console.log(selectRandomStudent(students));

function showMessage(message){
    console.log(message);
}

function checkAnswer(answer, solution, callback){
    if (answer === solution){
        callback('Correct');
        return true;
    }

    callback('Wrong');
    return false;
}

checkAnswer('Ja', 'Solution', showMessage); */