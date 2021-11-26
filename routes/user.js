var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");


router.use('/', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

router.get("/", async function (req, res, next) {
  const users = await User.find().exec();
  return res.status(200).json({ users: users });
});

router.get("/:userId", async function (req, res, next) {
    const user = await User.findOne().where('_id').equals(req.params.userId).exec();
    return res.status(200).json(user);
})

module.exports = router;