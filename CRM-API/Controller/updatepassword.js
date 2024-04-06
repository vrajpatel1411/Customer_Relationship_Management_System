const axios = require("axios");
// const express=require("express");
// const app=express();
const { url } = require("../config");
// app.use(express.json());
const updatepassword = async (req, res) => {
  var userid = req.body.userid;
  var password = req.body.password;
  const response = await axios.put(`${url}/user/${userid}`, {
    UserPass: password,
  });
  res.status(200).json(response.data);
};

module.exports = updatepassword;
