const followUp = require("../models/Followup");
// const express=require('express');
// const app=express();
// const sequelize=require("../sequelize");
// const{Verifytoken}=require("../config");

// app.use(express.json());
// sequelize.sync();

const getFollowUp = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  followUp
    .findAll()
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.FollowUpDate = require("moment")(element.FollowUpDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not found" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

const addFollowUp = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  followUp
    .create({
      ClientID: req.body.ClientID,
      LeadID: req.body.LeadId,
      FollowUpDate: req.body.FollowUpDate,
      ContactType: req.body.ContactType,
      Remarks: req.body.Remarks,
    })
    .then(() => {
      res.status(200).json({ message: true, data: "DATA ADDED" });
    })
    .catch((err) => {
      res.status(200).json({ message: true, data: "Data not added" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

const getSpecificFollowUp = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  followUp
    .findAll({ where: { LeadID: req.params.id } })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.FollowUpDate = require("moment")(element.FollowUpDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "Empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Found" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

const updateFollowUp = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  followUp
    .update(req.body, { where: { FollowUpID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "DATA UPDATED" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Updated" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

const deleteFollowup = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  followUp
    .destroy({ where: { FollowUpID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "DATA DELETED" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Date not deleted" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

module.exports = {
  getFollowUp,
  addFollowUp,
  updateFollowUp,
  getSpecificFollowUp,
  deleteFollowup,
};
