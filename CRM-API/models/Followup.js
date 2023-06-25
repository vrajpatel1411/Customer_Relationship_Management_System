const sequelize = require("../sequelize");

const Sequelize=require('sequelize')

const Followup=sequelize.define('FollowUp',{
    FollowUpID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
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
    FollowUpDate:{
        type:Sequelize.DATEONLY,
        allowNull: false
    },
    ContactType:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Remarks:{
        type:Sequelize.STRING,
        allowNull: true
    },
    
},
{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

module.exports=Followup