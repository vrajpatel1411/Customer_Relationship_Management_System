const express=require('express');
const app=express();
const sequelize=require("../sequelize");
const alumni=require("../models/Alumni.js");
const{Verifytoken}=require("../config");

app.use(express.json());

getAlumniByLead=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        alumni.findAll({where:{LeadID:req.params.id}})
        .then(data=>
        {
            res.status(200).json({message:true,data:data});
        }).catch(err=>{
                res.status(200).json({message:false,data:"Not Found"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}
// This will return all client records
getAlumni=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){    alumni.findAll()
        .then(data=>
        {
                res.status(200).json({message:true,data:data});
        }).catch(err=>{
                res.status(200).json({message:false,data:"Not Found"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will add client to Client table
addAlumni=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        const Alumni=req.body;
        alumni.create(Alumni)
        .then(()=>{
            res.status(200).json({message:true,data:"data added"});
        })
        .catch((err)=>{
            res.status(200).json({message:false,data:"Not Added"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will get client with provided id
getSpecificAlumni=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        alumni.findAll({where:{AlumniID:req.params.id}})
        .then(data=>{
            if(data.length>0)
            {
                res.status(200).json({message:true,data:data});
            }
            else{
                res.status(200).json({message:false,data:"Not Found"});
            }
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will update data in client table
updateAlumni=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        alumni.update(req.body,{where:{AlumniID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Updated"});
        })
        .catch(err=>
        {
            res.status(200).send({message:false,data:"Not updated"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

// This will delete client with provided id
deleteAlumni=(req,res)=>{
    if(Verifytoken(req.params.token,req.params.username)){
        alumni.destroy({where:{AlumniID:req.params.id}})
        .then(()=>{
            res.status(200).json({message:true,data:"Data Deleted"});
        })
        .catch(err=>
        {
            res.status(400).json({message:false,data:"Data not Deleted"});
        })
    }
    else{
        res.status(200).json({message:false,data:"Unauthenticated"});
    }
}

module.exports={
    getAlumni,
    getAlumniByLead,
    addAlumni,
    getSpecificAlumni,
    updateAlumni,
    deleteAlumni 
}