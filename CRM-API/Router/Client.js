const express = require("express");
const Router = express.Router();
const {
  // getClient,
  addClient,
  getSpecificClient,
  updateClient,
  deleteClient,
  getSpecificusernameclient,
} = require("../Controller/Client");
const jwtVerify = require("../Middleware/jwtVerification.js");

Router.use("/:token/:username", jwtVerify);
Router.use("/:token/:username/:id", jwtVerify);

// .get(getClient)

Router.route("/:token/:username").post(addClient);
Router.route("/:token/:username").get(getSpecificusernameclient);
Router.route("/:token/:username/:id")
  .get(getSpecificClient)
  .put(updateClient)
  .delete(deleteClient);

module.exports = Router;
