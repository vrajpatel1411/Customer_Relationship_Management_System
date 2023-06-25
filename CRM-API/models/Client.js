const sequelize=require('../sequelize');
const Sequelize=require('sequelize');


const Client=sequelize.define('Client',{
    ClientID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    CompanyName:{
        type:Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports=Client
