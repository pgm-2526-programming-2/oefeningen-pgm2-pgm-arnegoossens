//Oefening 1-4
function greetings(name = "daar"){
    return `Hallo ${name}!`;
}

console.log(greetings("Jan"));

//Oefening 5
function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return confirm("Did parents allow you?");
}

//Oefening 6
function myCallback(){
    return "Dit is een callback-functie.";
}

function mainLogic(callback){
    console.log(callback());
}

mainLogic(myCallback);

//Oefening 7
function increaseByTen(number){
    return number + 10;
}
let myNumber = 20;
myNumber = increaseByTen(myNumber);
console.log("Number:", myNumber);

//Oefening 8
const global = "global";
( () => {
    const global = "not global";
    console.log(global);
})();
console.log(global);

//Oefening 9
const todoList = [
    {
        task: "Complete Project",
        subtasks: [
        {
            task: "Write Code",
            subtasks: [
            { task: "Implement Feature A" },
            { task: "Test Feature A" },
            { task: "Refactor Code" },
            ],
        },
        {
            task: "Document Project",
            subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
        },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
    },
];

console.log(todoList.length);

function showTasks(tasks){
    if(tasks === undefined || tasks.length === 0){
        return;
    }

    for (const task of tasks) {
        console.log(task.task);

        showTasks(task.subtasks);
    }
}

showTasks(todoList);

//Oefening 9.1
function checkAge(age) {
    if (age > 18) {
        return "You good.";
    } else {
        return "Did parents allow you?";
    }
}
console.log(checkAge(20));
console.log(checkAge(10));

function checkAge2(age){
    return age > 18 ? "You good." : "Did parents allow you?";
}
console.log(checkAge2(20));
console.log(checkAge2(10));