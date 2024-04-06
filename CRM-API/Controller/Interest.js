// const express=require('express');
// const app=express();
const interest = require("../models/Interest.js");
// const {Verifytoken}=require("../config");

// app.use(express.json());

// This will return all client records
getInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .findAll()
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.StatusDate = require("moment")(element.StatusDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not found" });
    });
};
//         else{
//             res.status(200).json({message:false,data:"Unauthenticated"});
//         }
// }

// This will add client to Client table
addInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: true, data: "data added" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "not added " });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

// This will get client with provided id
getSpecificInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .findAll({ where: { LeadID: req.query.leadid, Status: req.query.status } })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.StatusDate = require("moment")(element.StatusDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "DATA NOT FOUND" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

// This will update data in client table
updateInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .update(req.body, { where: { InterestedInID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Client not updated" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

// This will delete client with provided id
deleteInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .destroy({ where: { InterestedInID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Deleted" });
    });
};
//         else{
//             res.status(200).json({message:false,data:"Unauthenticated"});
//         }
// }

deletedbyidandleadid = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .destroy({
      where: [{ ProdID: req.query.ProdID, LeadID: req.query.LeadID }],
    })
    .then(() => {
      res.status(200).send("Data Deleted");
    })
    .catch((err) => {
      res.status(400).send("Data not Deleted => " + err);
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

UpdateInterestByProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  interest
    .update(req.body, {
      where: { ProdID: req.query.prodid, LeadID: req.query.leadid },
    })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not updated" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

LeadInterest = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){

  var leadid = req.query.a;
  var prodid = req.query.b;
  interest
    .findAll({ where: { LeadID: leadid, ProdID: prodid } })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.InterestedInStatusDate = require("moment")(
            element.StatusDate
          ).format("YYYY-MM-DD");
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "DATA NOT FOUND" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

module.exports = {
  getInterest,
  addInterest,
  UpdateInterestByProduct,
  getSpecificInterest,
  updateInterest,
  deleteInterest,
  LeadInterest,
  deletedbyidandleadid,
};
