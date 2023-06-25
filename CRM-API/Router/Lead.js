const express=require('express')
const Router=express.Router()
const { getLead,
    addLead,
    getSpecificLead,
    updateLead,
    deleteLead,
    getLeadWithClientID,
    assignLead,
    updateUserID
 }= require('../Controller/Lead.js')

Router.route('/:token/:username/').get(getLead).post(addLead);
Router.route('/:token/:username/singlelead/:id').get(assignLead);
Router.route('/:token/:username/client').get(getLeadWithClientID)
Router.route('/:token/:username/:id').get(getSpecificLead).put(updateLead).delete(deleteLead);
Router.route('/:token/:username/user/:id').put(updateUserID);

module.exports=Router;