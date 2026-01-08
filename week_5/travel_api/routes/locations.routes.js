/**
 * @module API Endpoints for locations
 */
const { Router } = require("express");
const { addLocation } = require("../controllers/locations.controllers");
const router = Router();

/**
 * Routes: 
 * GET -> Returns all locations
 * POST -> Validates and save a new location
 * @type {function}
 */
router.get("/locations", (req, res) => {
  console.log("Get locations!");

  res.send("Data verstuurd naar server");
});

router.post("/locations", addLocation);

module.exports = router;