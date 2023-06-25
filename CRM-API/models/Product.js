const sequelize=require('../sequelize');
const Sequelize=require('sequelize');


const Product=sequelize.define('Product',{
    ProdID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    ClientID:{
        type: Sequelize.INTEGER,
        aloowNull:false
    },
    ProdName:{
        type:Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports=Product