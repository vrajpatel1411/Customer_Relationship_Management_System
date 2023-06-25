const sequelize=require('../sequelize');
const Sequelize=require('sequelize');


const Email=sequelize.define('Email',{
    EmailID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    ClientID:{
            type:Sequelize.INTEGER,
            allowNull:true
    },
    LeadID:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    Email:{
        type:Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports=Email