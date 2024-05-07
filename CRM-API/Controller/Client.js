const express = require("express");
const app = express();
const Client = require("../models/Client");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

// getClient = (req, res) => {
//   Client.findAll()
//     .then((data) => {
//       if (data.length > 0) {
//         res.status(200).json({ message: true, data: data });
//       } else {
//         res.status(200).json({ message: false, data: "Data empty" });
//       }
//     })
//     .catch((err) => {
//       res.status(200).json({ message: false, data: "Not found" });
//     });

// };

// This will add client to Client table
addClient = (req, res) => {
  Client.create(req.body)
    .then(() => {
      res.status(200).json({ message: true, data: "data added" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not added" });
    });
};

getSpecificClient = (req, res) => {
  Client.findAll({ where: { ClientID: req.params.id } })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Not found" });
    });
};

// This will update data in client table
updateClient = (req, res) => {
  Client.update(req.body, { where: { ClientID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data Not Updated" });
    });
};

// This will delete client with provided id
deleteClient = (req, res) => {
  Client.destroy({ where: { ClientID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Deleted" });
    });
};

getSpecificusernameclient = (req, res) => {
  Client.findAll({ where: { ClientUser: req.params.username } })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Data not found" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Not found" });
    });
};

module.exports = {
  // getClient,
  addClient,
  getSpecificClient,
  updateClient,
  deleteClient,
  getSpecificusernameclient,
};
