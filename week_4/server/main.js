const express = require('express');
const pathModule = require("path");
const filesystemModule = require("fs");
const myServer = express();

const PORT = 3000;
const HOST = 'localhost';

function getCurrentDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getUTCHours() + 1;
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return day + '/' + month + '/' + year + " " + hours + ":" + minutes + ":" + seconds;
}

myServer.get('/api', (request, response) => {
    console.log('Verzoek op de server');
    response.status(200);
    // response.send(`Verzoek ontvangen op ${getCurrentDate()}`);
    response.json({
        name: "Arne"
    });
});

// api/recipes
myServer.get('/api/recipes', (request, response) => {
    const recipesContent = filesystemModule.readFileSync(pathModule.join(__dirname, "recipes.json"), "utf8");
    const recipes = JSON.parse(recipesContent);
    response.status(200);
    // response.send(`Verzoek ontvangen op ${getCurrentDate()}`);
    response.json(recipes);
});

myServer.listen(PORT, HOST, () => {
    console.log(`Server staat aan op http://${HOST}:${PORT}`); // Afsluiten met ctrl + C

});

console.log("Server bestand!");