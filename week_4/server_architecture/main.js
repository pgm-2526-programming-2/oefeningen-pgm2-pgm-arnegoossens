const express = require("express");
const quotesRouter = require("./routes/quotes.routes");

const app = express();

// app.get("/api/quotes", getQuotes);

// Router gebruiken!
// Router is een collectie van routes
app.use("/api/", quotesRouter);

app.listen(8080, "localhost", (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log("Server is opgestart en draaiende op http://localhost:8080")
});