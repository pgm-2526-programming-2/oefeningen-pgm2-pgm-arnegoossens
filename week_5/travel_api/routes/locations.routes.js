const {Router} = require("express");
const router = Router();

router.get("/locations", (req, res) => {
  console.log("Get locations!");

  res.send("Data verstuurd naar server");
});

module.exports = router;