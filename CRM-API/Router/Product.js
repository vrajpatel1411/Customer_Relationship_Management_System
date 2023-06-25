const express=require('express');
const Router=express.Router()
const { 
    getProduct,
    addProduct,
    getSpecificProduct,
    updateProduct,
    deleteProduct,getProductbyClient}  = require('../Controller/Product.js');

Router.route('/:token/:username/').get(getProduct).post(addProduct);
Router.route('/:token/:username/:id').get(getSpecificProduct).put(updateProduct).delete(deleteProduct);
Router.route('/:token/:username/client/:id').get(getProductbyClient);
module.exports=Router;