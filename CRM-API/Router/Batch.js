const express=require('express');
const Router=express.Router()
const { 
    getBatchByProducts,
    addBatch,deleteBatch}  = require('../Controller/Batch.js');

Router.route('/:token/:username/:id').get(getBatchByProducts).delete(deleteBatch)
Router.route('/:token/:username').post(addBatch);
module.exports=Router;