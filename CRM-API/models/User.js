const sequelize=require('../sequelize');
const Sequelize=require('sequelize');

const User=sequelize.define('Users',{
    UserID:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    ClientID:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    UserName:{
        type:Sequelize.STRING,
        allowNull:false,
        Unique:true
    },
    UserPass:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    UserRole:{
        type:Sequelize.STRING,
        allowNull:true
    }
},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});


module.exports=User;