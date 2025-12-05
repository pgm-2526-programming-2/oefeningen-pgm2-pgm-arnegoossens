const process = require("process");
const pathModule = require("path");
const filesystemModule = require("fs");
// require altijd bovenaan 

const studentsPath = pathModule.join(__dirname, "students.json");
const pathToFUnctionsCourse = pathModule.join("..", "..", "week_1", "les_1", "functions.js");

// Filesystem kan om bestanden te lezen!
const fileContent = filesystemModule.readFileSync(studentsPath, "utf8");
const fileContentAsArray = JSON.parse(fileContent);
// fileContentAsArray.push({
//     name: "Yens",
//     age: 25
// });

// Nut van path?
// platformonafhankelijk (\ en /)
// veiliger/robuuster: speciale tekens zoals spatie werken
// Toekomst: wat als er een nieuwe OS is 
console.log(fileContentAsArray);

filesystemModule.writeFileSync(studentsPath, JSON.stringify(fileContentAsArray));