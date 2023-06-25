const express=require('express');
const app=express();
const sequelize=require("../sequelize");
const User =require("../models/User");
const { Verifytoken } = require('../config');
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());



// This will return all client records
getUser=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
            User.findAll()
            .then(data=>
            {
                if(data.length<=0)
                {
                    res.json({status:200,Data:"Empty"})
                }
                else{
                    res.json({status:200,Data:data});
                }
            }).catch(err=>{
                console.log(err);
                res.send(err);
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
    
}

// This will add client to Client table
addUser=(req,res)=>{
    console.log(req.params)
    if(Verifytoken(req.params.token,req.params.username)){
        user=req.body;
        console.log(user);
            User.create(req.body)
            .then(()=>{
                res.json({status:200,Data:"data added"});
            })
            .catch((err)=>{
                res.json({status:200,Data:err});
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will get client with provided id
getSpecificUser=(req,res)=>{
    // console.log(req.params.token)
    if(Verifytoken(req.params.token,req.params.username)){
    
        User.findAll({where:{ClientID:req.params.id}})
        .then(data=>{
            if(data.length>0)
            {
                res.json({status:200,Data:data});
            }
            else{
                res.json({status:400,Data:"DATA NOT FOUND"});
            }
        }).catch(err=>{
            res.json({status:400,Data:err});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will update data in client table
updateUser=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        User.update(req.body,{where:{UserID:req.params.id}})
        .then(()=>{
            res.json({status:200,Data:"Data Updated"});
        })
        .catch(err=>
        {
            res.json({status:400,Data:"Data Not Updated"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will delete client with provided id
deleteUser=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
    
        User.destroy({where:{UserID:req.params.id}})
        .then(()=>{
            res.json({status:200,Data:"Data Deleted"});
        })
        .catch(err=>
        {
            res.json({status:400,Data:err});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

getSpecificusername=(req,res)=>{
    console.log("hello")
    User.findAll({where:{UserName:req.params.username}})
    .then(data=>{
    
        if(data.length>0)
        {
            var element=data.map(client=>{return client.dataValues});
            res.status(200).json(element); 
        }
        else{
            res.status(400).json("Done");
        }
    })
}

module.exports={
    getUser,
    addUser,
    getSpecificUser,
    updateUser,
    deleteUser,getSpecificusername
}