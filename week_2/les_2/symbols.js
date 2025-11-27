const student = Symbol("Yme");
const person = Symbol("Yme");

console.log(student, student.toString(), student.description, student === person);

// Uppercase variables - waarden die nooit zullen veranderen & en je gebruikt die in heel je project!
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: "Laden"
}

console.log(STATES.LOADED === STATES.LOADED);