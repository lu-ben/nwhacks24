const express = require("express");
const router = express.Router();
const {
  addRequest,
  getRequests,
  deleteRequest,
  modifyRequest,
  updateRequest,
} = require("../dbService/requestsdb.js");


router.post("/add", async (req, res) => {

  const user_id = req.body.user_id;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = req.body.time;
  const date = req.body.date;
  const status = req.body.status;
  const lat = req.body.lat;
  const lon = req.body.lon;

  const rideRequests = await addRequest(user_id, origin, destination, time, date, status, lat, lon);
  res.send(rideRequests);
});

router.get("/get", async (req, res) => {

  const rideRequests = await getRequests();
  res.send(rideRequests);
});

router.post("/update", async (req, res) => {
  const id = req.body.id;
  const driver_id = req.body.driver_id;
  const rideRequests = await updateRequest(id, driver_id);
  res.send(rideRequests);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteRequest(id);
  res.send(result);
});

router.post("/modify/:status", async (req, res) => {
  const _id = req.body._id;
  const status = req.params.status;

  const rideRequests = await modifyRequest(_id, status);
  res.send(rideRequests);
});

module.exports = router;
