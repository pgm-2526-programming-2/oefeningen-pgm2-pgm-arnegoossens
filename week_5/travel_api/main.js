/**
 * @file This is the main file where we will start our server.
 */
const express = require("express");
const locationsRouter = require("./routes/locations.routes");
const app = express();

/**
 * @type {number} 
 * @description The port of our server
 */
const PORT = 3030;
/**
 * @type {string} 
 * @description Here you can set the base URL of your API.
 */
const HOST = "localhost";

/**
 * This is middleware that allows the api to receive and send JSON data.
 */
app.use(express.json());
/**
 * This is middleware that adds several routes of locations to our API.
 */
app.use(locationsRouter);

/**
 * This starts our server on the port and host specified above
 */
app.listen(PORT, HOST, (err) => {
  if(err) {
    return console.error(err.message);
  }

  console.log(`De server is lopende op http://${HOST}:${PORT}`);
});