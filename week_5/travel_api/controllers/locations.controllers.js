function addLocation(req, res) {
  console.log("Post a new location!");
  res.status(201);
  res.send("Data is succesvol toegevoegd!");
}

module.exports = {
  addLocation
}