/**
 * @file This is the main file of our application
 * @author Arne Goossens heeft deze code geschreven
 */

/**
 * @typedef {{id: number|string, name: string, amountOfStudents: number, isFun: boolean}} CourseType
 */

/**
 * A definition of a student type
 * @typedef {Object} StudentType
 * @property {string} name The name of a student
 * @property {number} age The age of a student
 * @property {?string} gender The gender of a student
 */

/**
 * Student name
 * @type {String}
 */
const studentName = "Arne";

/**
 * @type {StudentType}
 */
const student = {
  name: "Arne",
  age: 30,
  gender: null
}

/**
 * A list of students hoe are physically in class
 * @type {Array<string>}
 */
const students = ["Mert", "Ignace", "Arne", "Hasan", "Justin"];

/**
 * Is a description of a course
 * @type {CourseType}
 */
const courses = {
  id: 1,
  name: "Programming 2: Advanced",
  amountOfStudents: 20,
  isFun: true
}

/**
 * Is a description of a course
 * @type {CourseType}
 */
const secondCourse = {
  id: "516516",
  name: "Web 2",
  amountOfStudents: 15,
  isFun: false
  }

/**
 * This logs a message in our console
 */
function sayHallo() {
  console.log("Hello");
}

/**
 * This function calculates the sum of 2 arguments
 * @param {number} a 
 * @param {number} b 
 * @returns {string}
 */
function sum (a,b) {
  return `De som van ${a} en ${b} is ${a + b}`;
}