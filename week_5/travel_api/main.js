const express = require("express");
const locationsRouter = require("./routes/locations.routes");
const app = express();
const PORT = 3030;
const HOST = "localhost";

app.use(locationsRouter);

app.listen(PORT, HOST, (err) => {
  if(err) {
    return console.error(err.message);
  }

  console.log(`De server is lopende op http://${HOST}:${PORT}`);
});