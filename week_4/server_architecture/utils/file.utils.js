const pathModule = require("path");
const filesystemModule = require("fs");

function getData(file, basePath = "models") {
    return JSON.parse(filesystemModule.readFileSync(pathModule.join(basePath, file), "utf-8"));
}

function replaceData(file, data, basePath = "models") {
    dataString = JSON.stringify(data);
    filesystemModule.writeFileSync(pathModule.join(__dirname, "..", basePath, file), dataString);
}

module.exports = {getData, replaceData};