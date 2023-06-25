const express=require('express')
const Router=express.Router()
const { 
    getInterest,
    addInterest,
    getSpecificInterest,
    updateInterest,
    deleteInterest ,LeadInterest,deletedbyidandleadid,UpdateInterestByProduct} = require('../Controller/Interest.js')

Router.route('/:token/:username').get(getInterest).post(addInterest);
Router.route('/:token/:username/lead').get(LeadInterest);
Router.route('/:token/:username/product').put(UpdateInterestByProduct);
Router.route('/:token/:username/status').get(getSpecificInterest);
Router.route('/:token/:username/').delete(deletedbyidandleadid);
Router.route('/:token/:username/:id').put(updateInterest).delete(deleteInterest);

module.exports=Router;