const express=require('express')
const Router=express.Router()
const { 
    getFollowUp,
    addFollowUp,
    updateFollowUp,
    getSpecificFollowUp,
    deleteFollowup
 }= require('../Controller/Followup.js')

Router.route('/:token/:username/').get(getFollowUp).post(addFollowUp);
Router.route('/:token/:username/:id').get(getSpecificFollowUp).put(updateFollowUp).delete(deleteFollowup);

module.exports=Router;