const express = require("express");

const Router = express.Router();
const {
  getAlumni,
  addAlumni,
  getAlumniByLead,
  getSpecificAlumni,
  updateAlumni,
  deleteAlumni,
} = require("../Controller/Alumni.js");
const { Verifytoken } = require("../config.js");

Router.use("/:token/:username", Verifytoken);
Router.use("/lead/:token/:username/:id", Verifytoken);
Router.use("/:token/:username/:id", Verifytoken);

Router.route("/:token/:username").get(getAlumni).post(addAlumni);
Router.route("/lead/:token/:username/:id").get(getAlumniByLead);
Router.route("/:token/:username/:id")
  .get(getSpecificAlumni)
  .put(updateAlumni)
  .delete(deleteAlumni);

module.exports = Router;
