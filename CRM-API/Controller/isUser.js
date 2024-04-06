const axios = require("axios");
// const express=require("express");
const { Generatetoken } = require("../config");
const { url } = require("../config");
// const app=express();
// app.use(express.json());
const isUser = async (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  const response = await axios
    .get(`${url}/user/username/${username}`)
    .catch((err) => {
      if (err.response) {
        return { status: err.response.status, data: err.response.data };
      }
    });
  var name = "";
  var id;

  var clientid;

  for (var r in response.data) {
    id = response.data[r].UserID;
    name = response.data[r].User;
    clientid = response.data[r].ClientID;
  }
  const jwtoken = Generatetoken(name, id, clientid);
  if (response.status === 200) {
    res.json({ auth: true, user: name, userid: id, token: jwtoken });
  } else {
    res.json({ auth: false });
  }
};

module.exports = isUser;
