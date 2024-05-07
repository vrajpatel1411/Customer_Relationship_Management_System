const { Verifytoken } = require("../config");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
const jwtVerify = (req, res, next) => {
  if (Verifytoken(req.params.token, req.params.username)) {
    next();
  } else {
    res.status(401).json({ message: false, data: "Unauthenticated" });
  }
};

module.exports = jwtVerify;
