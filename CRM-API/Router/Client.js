const express=require('express')
const Router=express.Router()
const { getClient,
    addClient,
    getSpecificClient,
    updateClient,
    deleteClient,getSpecificusernameclient } = require('../Controller/Client')

Router.route('/:token/:username').get(getClient).post(addClient)
Router.route('/:token/:username').get(getSpecificusernameclient);
Router.route('/:token/:username/:id').get(getSpecificClient).put(updateClient).delete(deleteClient)


module.exports=Router;