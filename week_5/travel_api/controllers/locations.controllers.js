/**
 * @module Locations controller functions
 */

/**
 * @type {string}
 * @constant
 */
const pathFile = "C:/Example/project"
const {Request, Response} = require("express");

/**
 * This controller function adds a location to
 * @param {Request} req Request of a front-end application. This can have a body
 * @param {Response} res The object built-in to express
 */
function addLocation(req, res) {
  console.log("Post a new location!");
  res.status(201);
  res.send("Data is succesvol toegevoegd!");
}

module.exports = {
  addLocation
}