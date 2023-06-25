const sequelize=require('../sequelize');
const Sequelize=require('sequelize');


const Mobile=sequelize.define('Mobile',{
    MobileID:{
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
    CountryCode:{
        type:Sequelize.STRING,
        allowNull: false
    },
    MobileNo:{
        type:Sequelize.STRING,
        allowNull:false,
    }

},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports=Mobile