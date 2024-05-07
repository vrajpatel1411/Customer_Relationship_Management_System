const express = require("express");

const Router = express.Router();
const {
  getEmail,
  AddEmail,
  getSpecificEmail,
  UpdateEmail,
  deleteEmail,
} = require("../Controller/Email.js");
const jwtVerify = require("../Middleware/jwtVerification.js");

Router.use("/:token/:username", jwtVerify);
Router.use("/:token/:username/:id", jwtVerify);

Router.route("/:token/:username").get(getEmail).post(AddEmail);
Router.route("/:token/:username/:id")
  .get(getSpecificEmail)
  .put(UpdateEmail)
  .delete(deleteEmail);

module.exports = Router;
