const express = require("express");
const Router = express.Router();
const {
  getLead,
  addLead,
  getSpecificLead,
  updateLead,
  deleteLead,
  getLeadWithClientID,
  assignLead,
  updateUserID,
} = require("../Controller/Lead.js");
const jwtVerify = require("../Middleware/jwtVerification.js");

Router.use("/:token/:username/", jwtVerify);
Router.use("/:token/:username/singlelead/:id", jwtVerify);
Router.use("/:token/:username/client", jwtVerify);
Router.use("/:token/:username/:id", jwtVerify);

Router.route("/:token/:username/").get(getLead).post(addLead);
Router.route("/:token/:username/singlelead/:id").get(assignLead);
Router.route("/:token/:username/client").get(getLeadWithClientID);
Router.route("/:token/:username/:id")
  .get(getSpecificLead)
  .put(updateLead)
  .delete(deleteLead);
Router.route("/:token/:username/user/:id").put(updateUserID);

module.exports = Router;
