const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
} = require("../dbService/usersdb.js");


router.post("/add", async (req, res) => {

  const user_id = req.body.user_id;

  const users = await addUser(user_id);
  res.send(users);
});

router.get("/get", async (req, res) => {

  const users = await getUsers();
  res.send(users);
});

module.exports = router;
