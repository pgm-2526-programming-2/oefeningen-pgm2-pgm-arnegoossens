const {Router} = require("express");
const { addLocation } = require("../controllers/locations.controllers");
const router = Router();

router.get("/locations", (req, res) => {
  console.log("Get locations!");

  res.send("Data verstuurd naar server");
});

router.post("/locations", addLocation);

module.exports = router;