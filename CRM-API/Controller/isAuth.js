const axios = require("axios");
// const express = require("express");
const { Generatetoken } = require("../config");
// const app = express();
// app.use(express.json());
const { url } = require("../config");
// app.use(express.urlencoded({ extended: true }));
const isAuth = async (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  var name;
  var status;
  var id;
  var password;
  var clientid;
  var role;
  await axios
    .get(`${url}/user/username/${username}`)
    .then((response) => {
      status = response.status;
      for (var r in response.data) {
        id = response.data[r].UserID;
        clientid = response.data[r].ClientID;
        name = response.data[r].UserName;
        password = response.data[r].UserPass;
        role = response.data[r].UserRole;
      }
    })
    .catch((err) => {
      if (err.response) {
        return { status: err.response.status, data: err.response.data };
      }
    });
  const jwtoken = Generatetoken(name, id, clientid);

  if (status === 200 && pass === password) {
    res.status(200).json({
      auth: true,
      user: name,
      userid: id,
      clientid: clientid,
      role: role,
      token: jwtoken,
    });
  } else {
    res.status(200).json({ auth: false });
  }
};

module.exports = isAuth;
