const express = require("express");
const { getAllQuotes, getQuoteById } = require("../controllers/quotes.controller");
const quotesRouter = express.Router();

quotesRouter.get("/quotes", getAllQuotes);
quotesRouter.get("/quotes/:id", getQuoteById);
quotesRouter.post("/quotes", (req, res) => {
    res.send("Post request!");
})

module.exports = quotesRouter;