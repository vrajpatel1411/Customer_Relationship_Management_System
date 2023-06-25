const express=require('express');

const Router=express.Router()
const { 
    getMobileNo,
    AddMobileNo,
    getSpecificNumber,
    UpdateMobileNumber,
    deletemobileNumber}  = require('../Controller/Mobile.js');

Router.route('/:token/:username/').get(getMobileNo).post(AddMobileNo);
Router.route('/:token/:username/:id').get(getSpecificNumber).put(UpdateMobileNumber).delete(deletemobileNumber);

module.exports=Router;
