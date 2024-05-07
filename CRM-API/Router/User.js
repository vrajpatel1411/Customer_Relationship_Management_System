const express = require("express");
const Router = express.Router();
const {
  getUser,
  addUser,
  getSpecificUser,
  updateUser,
  deleteUser,
  getSpecificusername,
} = require("../Controller/User.js");
const jwtVerify = require("../Middleware/jwtVerification.js");

Router.route("/username/:username").get(getSpecificusername);

Router.use("/:token/:username", jwtVerify);
Router.use("/:token/:username/:id", jwtVerify);

Router.route("/:token/:username").get(getUser).post(addUser);
Router.route("/:token/:username/:id")
  .get(getSpecificUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = Router;
