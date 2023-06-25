const express=require('express');
const app=express();
const sequelize=require("../sequelize");
const mobile =require("../models/Mobile.js");
const {Verifytoken}=require("../config");
app.use(express.json());
sequelize.sync();

// This will return all client records
getMobileNo=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
    
        mobile.findAll()
        .then(data=>
            {
                if(data.length>0)
                {
                    res.status(200).json({message:true,data:data});
                }
                else
                {
                    res.status(200).json({message:false,data:"empty"});    
                }        
            }).catch(err=>{
                res.status(200).json({message:false,data:"DATA NOT FOUND"});
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will add client to Client table
AddMobileNo=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        const usernumber=req.body;
        mobile.create(usernumber)
        .then(()=>{
            res.status(200).json({message:true,data:"data added"});
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:" Not added"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will get client with provided id
getSpecificNumber=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        mobile.findAll({where:{LeadID:req.params.id}})
        .then(data=>{
            if(data.length>0)
            {
                res.status(200).json({message:true,data:data});
            }
            else{
                res.status(200).json({message:false,data:"DATA NOT FOUND"});
            }
        })
        .catch(err=>{
            res.status(200).json({message:false,data:"DATA NOT FOUND"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will update data in client table
UpdateMobileNumber=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
    
        mobile.update(req.body,{where:{MobileID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Updated"});
        })
        .catch(err=>
            {
                res.status(200).json({message:true,data:"Not updated"});
            })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will delete client with provided id
deletemobileNumber=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        mobile.destroy({where:{MobileID:req.params.id}})
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
    getMobileNo,
    AddMobileNo,
    getSpecificNumber,
    UpdateMobileNumber,
    deletemobileNumber}