// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser");
// const axios = require("axios");
const lead = require("../models/Lead.js");
// const { Verifytoken } = require("../config");
// app.use(bodyparser.json());
// app.use(express.json());

getLeadWithClientID = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .findAll({
      where: { UserID: req.query.userid, Status: req.query.status },
    })
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        data.forEach((element) => {
          element.LeadDate = require("moment")(element.LeadDate).format(
            "YYYY-MM-DD"
          );
          element.LeadStatusDate = require("moment")(
            element.LeadStatusDate
          ).format("YYYY-MM-DD");
          element.NextFollowUpDate = require("moment")(
            element.NextFollowUpDate
          ).format("YYYY-MM-DD");
          var a = element.LeadNote;
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      // res.send(err);
      res.status(200).json({ message: false, data: "not found" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

// This will return all client records
getLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .findAll()
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.LeadDate = require("moment")(element.LeadDate).format(
            "YYYY-MM-DD"
          );
          element.LeadStatusDate = require("moment")(
            element.LeadStatusDate
          ).format("YYYY-MM-DD");
          element.NextFollowUpDate = require("moment")(
            element.NextFollowUpDate
          ).format("YYYY-MM-DD");
          var a = element.LeadNote;
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      // res.send(err);
      res.status(200).json({ message: false, data: "Not found" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

// This will add client to Client table
addLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .create(req.body)
    .then((response) => {
      res.status(200).json({
        message: true,
        data: "Added",
        leadid: response.dataValues.LeadID,
      });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Not added" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

// This will get client with provided id
getSpecificLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .findAll({ where: { LeadID: req.params.id } })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.LeadDate = require("moment")(element.LeadDate).format(
            "YYYY-MM-DD"
          );
          element.LeadStatusDate = require("moment")(
            element.LeadStatusDate
          ).format("YYYY-MM-DD");
          element.NextFollowUpDate = require("moment")(
            element.NextFollowUpDate
          ).format("YYYY-MM-DD");
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Not found" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

// This will update data in client table
updateLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  var a = req.body.LeadNote;
  if (a) {
    lead.findOne({ where: { LeadID: req.params.id } }).then((data) => {
      data
        .forEach((element) => {
          b = element.LeadNote;
          req.body.LeadNote = b + " " + a;
        })
        .catch((err) => {
          res.status(200).json({ message: false, data: "Not Updated" });
        });
      lead
        .update(req.body, { where: { LeadID: req.params.id } })
        .then(() => {
          res.status(200).json({ message: true, data: "Data Updated" });
        })
        .catch((err) => {
          res.status(200).json({ message: false, data: "Not Updated" });
        });
    });
  } else {
    lead
      .update(req.body, { where: { LeadID: req.params.id } })
      .then(() => {
        res.status(200).json({ message: true, data: "Data Updated" });
      })
      .catch((err) => {
        res.status(200).json({ message: false, data: "Not Updated" });
      });
  }
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};
// This will delete client with provided id
deleteLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .destroy({ where: { LeadID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: true, data: "Data Not Deleted" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

assignLead = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .findAll({ where: { UserID: null } })
    .then((data) => {
      var Leadarray = [];
      temp = data.map((a) => Leadarray.push(a.dataValues));
      const random = Math.floor(Math.random() * Leadarray.length);
      if (Leadarray.length > 0) {
        let leadid = Leadarray[random].LeadID;
        console.log(leadid);
        lead
          .update({ UserID: req.params.id }, { where: { LeadID: leadid } })
          .then(() => {
            res.status(200).json({ message: true, data: "Data Updated" });
          })
          .catch((err) => {
            res.status(200).json({ message: false, data: "Not Updated" });
          });
      } else {
        res.status(200).json({ message: false, data: "Not Updated" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Not Updated" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};

updateUserID = (req, res) => {
  // if (Verifytoken(req.params.token, req.params.username)) {
  lead
    .update({ UserID: req.body.UserID }, { where: { UserID: req.params.id } })
    .then((response) => {
      res.status(200).json({ message: true, data: "updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not updated" });
    });
  // } else {
  //   res.status(200).json({ message: false, data: "Unauthenticated" });
  // }
};
module.exports = {
  getLead,
  addLead,
  getSpecificLead,
  updateLead,
  deleteLead,
  getLeadWithClientID,
  assignLead,
  updateUserID,
};
