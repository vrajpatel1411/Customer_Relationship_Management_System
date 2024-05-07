// const express = require("express");
// const app = express();
// const sequelize = require("../sequelize");
const batch = require("../models/Batch");
// const { Verifytoken } = require("../config");
// app.use(express.json());

getBatchByProducts = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  let date = new Date();
  batch
    .findAll({ where: { ProdID: req.params.id } })
    .then((data) => {
      var Batcharray = [];
      temp = data.map((a) => Batcharray.push(a.dataValues));
      if (Batcharray.length > 0) {
        res.status(200).json({ status: true, data: Batcharray });
      } else {
        res.status(200).json({ status: false, data: "No data Found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ status: false, data: "Data not Found" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

addBatch = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  batch
    .create(req.body)
    .then((r) => {
      res.status(200).json({ message: true, data: "Data Added" });
    })
    .catch((err) => {
      res.status(400).json({ message: false, data: "Data not Added" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

deleteBatch = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  batch
    .destroy({ where: { BatchID: req.params.id } })
    .then((response) => {
      res.status(200).json({ message: true, data: "Batch Deleted" });
    })
    .catch((err) => {
      res.status(400).json({ message: false, data: "Batch Not Deleted" });
    });
};
//     else{
//         res.status(200).json({message:false,data:"Unauthenticated"});
//     }
// }

module.exports = { getBatchByProducts, addBatch, deleteBatch };
