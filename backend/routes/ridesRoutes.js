const express = require("express");
const router = express.Router();
const {
  addRide,
  getRides,
} = require("../dbService/ridesdb.js");


router.post("/add", async (req, res) => {

  const user = req.body.user;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = req.body.time;
  const date = req.body.date;

  const rides = await addRide(user, origin, destination, time, date);
  res.send(rides);
});

router.get("/", async (req, res) => {

  const rides = await getRides();
  res.send(rides);
});

module.exports = router;
