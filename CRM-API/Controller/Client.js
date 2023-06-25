const express=require('express');
const app=express();
const session=require('express-session');
const sequelize=require("../sequelize");
const Client =require("../models/Client");
const { Verifytoken } = require('../config');
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

sequelize.sync();
app.use(session({
        secret:"hello world",
        resave:false,
        saveUninitialized:false,
        cookie:{}
        })
    );
    
getClient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        Client.findAll()
            .then(data=>
            {
                if(data.length>0)
                {
                    res.status(200).json({message:true,data:data});
                }
                else{
                    res.status(200).json({message:false,data:"Data empty"});
                }
            }).catch(err=>{
                res.status(200).json({message:false,data:"Not found"});
            })
        }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will add client to Client table
addClient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        Client.create(req.body)
        .then(()=>{
            res.status(200).json({message:true,data:"data added"});
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:"data not added"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will get client with provided id
getSpecificClient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        Client.findAll({where:{ClientID:req.params.id}})
        .then(data=>{
            if(data.length>0)
            {
                res.status(200).json({message:true,data:data});
            }
            else{
                res.status(200).json({message:false,data:"Empty"});
            }
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:"Not found"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will update data in client table
updateClient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
    
        Client.update(req.body,{where:{ClientID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Updated"});
        })
        .catch(err=>
        {
            res.status(200).json({message:false,data:"Data Not Updated"});
        })
        }else{
                res.status(200).json({message:false,data:"Unauthenticated"});
            }
}

// This will delete client with provided id
deleteClient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        Client.destroy({where:{ClientID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Deleted"});
        })
        .catch(err=>
        {
            res.status(200).json({message:false,data:"Data not Deleted"});
        })
    }else{
        res.status(200).json({message:false,data:"Unauthenticated"});        
    }
}

getSpecificusernameclient=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        Client.findAll({where:{ClientUser:req.params.username}})
        .then(data=>{
            if(data.length>0)
            {
                // var element=data.map(client=>{return client.dataValues});
                res.status(200).json({message:true,data:data});
            }
            else{
                res.status(200).json({message:false,data:"Data not found"});
            }
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:"Not found"});
        })
    }else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

module.exports={
    getClient,
    addClient,
    getSpecificClient,
    updateClient,
    deleteClient,
    getSpecificusernameclient
}