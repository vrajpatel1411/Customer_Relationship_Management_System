const express = require("express");
const Router = express.Router();
const {
  getFollowUp,
  addFollowUp,
  updateFollowUp,
  getSpecificFollowUp,
  deleteFollowup,
} = require("../Controller/Followup.js");
const jwtVerify = require("../Middleware/jwtVerification.js");

Router.use("/:token/:username", jwtVerify);
Router.use("/:token/:username/:id", jwtVerify);

Router.route("/:token/:username/").get(getFollowUp).post(addFollowUp);
Router.route("/:token/:username/:id")
  .get(getSpecificFollowUp)
  .put(updateFollowUp)
  .delete(deleteFollowup);

module.exports = Router;
