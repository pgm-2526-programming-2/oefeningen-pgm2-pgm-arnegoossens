const quotesRouter = require("../routes/quotes.routes");
const {getData, replaceData} = require("../utils/file.utils");

function getAllQuotes(req, res) {
    data = getData("quotes.json");
    
    res.json(data);
}

function getQuoteById(req, res) {
    const {id} = req.params;
    quotes = getData("quotes.json");
    const quote = quotes.find((quote) => quote.id === id);
    res.json(quote);
}

function replaceQuotes(newQuoteObject) {
    replaceData("test.json", newQuoteObject);
}

module.exports = {
    getAllQuotes,
    replaceQuotes,
    getQuoteById
};