
const {generateRandomData} = require("./data.js");
const {applyConfusingProcessing, calculateImportance, calculateComplexity} = require("./processing.js");
const {displayObscureDataFormatting, displayImportance, displayComplexity} = require("./reporting.js");

const data = generateRandomData();
applyConfusingProcessing(data);
displayObscureDataFormatting(data);
const {highImportanceCount, lowImportanceCount} = calculateImportance(data);
displayImportance(data, highImportanceCount, lowImportanceCount);
const {highComplexityCount, lowComplexityCount} = calculateComplexity(data);
displayComplexity(data, highComplexityCount, lowComplexityCount);