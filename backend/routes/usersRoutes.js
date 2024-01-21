const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
} = require("../dbService/usersdb.js");


router.post("/add", async (req, res) => {

  const user_id = req.body.user_id;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = req.body.time;
  const date = req.body.date;

  const users = await addUser(user_id, origin, destination, time, date);
  res.send(users);
});

router.get("/get", async (req, res) => {

  const users = await getUsers();
  res.send(users);
});

module.exports = router;
