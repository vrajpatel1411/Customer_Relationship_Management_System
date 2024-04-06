// const express=require('express');
// const app=express();
// const sequelize=require("../sequelize");
const product = require("../models/Product");
// const {Verifytoken}=require("../config")

// app.use(express.json());
// product.sync({alter:false});
// This will return all client records
getProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  product
    .findAll()
    .then((data) => {
      res.status(200).json({ message: true, data: data });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: err.message });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

// This will add client to Client table
addProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  const clientproduct = req.body;
  product
    .create(clientproduct)
    .then(() => {
      res.status(200).json({ message: true, data: "Data Added" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Added" });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

// This will get client with provided id
getSpecificProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  product
    .findAll({ where: { ProdID: req.params.id } })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "data not found" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not found" });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

getProductbyClient = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){
  product
    .findAll({ where: { ClientID: req.params.id } })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "data not found" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not found" });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

// This will update data in client table
updateProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){

  product
    .update(req.body, { where: { ProdID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "data updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not Updated" });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

// This will delete client with provided id
deleteProduct = (req, res) => {
  // if(Verifytoken(req.params.token,req.params.username)){

  product
    .destroy({ where: { ProdID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "data Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "data not Deleted" });
    });
};
// else{
//     res.status(200).json({message:false,data:"Unauthenticated"});
// }
// }

module.exports = {
  getProduct,
  addProduct,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
  getProductbyClient,
};
