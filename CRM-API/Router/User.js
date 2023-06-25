const express=require('express')
const Router=express.Router()
const { getUser,
    addUser,
    getSpecificUser,
    updateUser,
    deleteUser,getSpecificusername } = require('../Controller/User.js')
   
Router.route('/username/:username').get(getSpecificusername);
Router.route('/:token/:username').get(getUser).post(addUser)
Router.route('/:token/:username/:id').get(getSpecificUser).put(updateUser).delete(deleteUser)

module.exports=Router;


    
    


