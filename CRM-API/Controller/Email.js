const express=require('express');
const app=express();
const sequelize=require("../sequelize");
const email =require("../models/Email");
const {Verifytoken}=require("../config")


app.use(express.json());
sequelize.sync();

// This will return all client records
getEmail=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        email.findAll()
        .then(data=>
            {
                res.status(200).json({message:true,data:data});
            }).catch(err=>{
                res.status(200).json({message:false,data:"not found"});
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will add client to Client table
AddEmail=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        const leademail=req.body;
        email.create(leademail)
        .then(()=>{
            res.status(200).json({message:true,data:"Data added"});
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:"not added"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will get client with provided id
getSpecificEmail=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        email.findAll({where:{LeadID:req.params.id}})
        .then(data=>{
            if(data.length>0)
            {
                res.status(200).json({message:true,data:data});
            }
            else{
                res.status(200).json({message:false,data:"Not found"});
            }
        }).catch(err=>{
            res.status(200).json({message:false,data:"Not found"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will update data in client table
UpdateEmail=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        email.update(req.body,{where:{EmailID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Updated"});
        })
        .catch(err=>
        {
            res.status(200).json({message:false,data:"Data Not Updated"});            
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will delete client with provided id
deleteEmail=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        email.destroy({where:{EmailID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Deleted"});
        })
        .catch(err=>
            {
                res.status(200).json({message:false,data:"Data not Deleted"});
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

module.exports={
    getEmail,
    AddEmail,
    getSpecificEmail,
    UpdateEmail,
    deleteEmail}