const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
} = require("../dbService/usersdb.js");


router.post("/add", async (req, res) => {

  const user_info = req.body


  const users = await addUser(user_info);
  res.send(users);
});

router.get("/get", async (req, res) => {

  const users = await getUsers();
  res.send(users);
});

module.exports = router;
