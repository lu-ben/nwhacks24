const express = require("express");
const router = express.Router();
const {
  addRide,
  getRides,
  deleteRide,
} = require("../dbService/ridesdb.js");


router.post("/add", async (req, res) => {

  const user_id = req.body.user_id;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = req.body.time;
  const date = req.body.date;

  const rides = await addRide(user_id, origin, destination, time, date);
  res.send(rides);
});

router.get("/", async (req, res) => {

  const rides = await getRides();
  res.send(rides);
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const result = await deleteRide(id);
    res.send(result);
  });

module.exports = router;
