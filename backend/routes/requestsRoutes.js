const express = require("express");
const router = express.Router();
const {
  addRequest,
  getRequests,
} = require("../dbService/requestsdb.js");


router.post("/add", async (req, res) => {

  const user = req.body.user;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = req.body.time;
  const date = req.body.date;

  const rideRequests = await addRequest(user, origin, destination, time, date);
  res.send(rideRequests);
});

router.get("/", async (req, res) => {

  const rideRequests = await getRequests();
  res.send(rideRequests);
});

module.exports = router;
