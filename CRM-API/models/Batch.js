const sequelize=require('../sequelize');
const Sequelize=require('sequelize');

const Batch = sequelize.define("Batch",{
  BatchID:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
  },
  ClientID:{
    type:Sequelize.INTEGER,
    allowNull:true
    },
  ProdID:{
      type:Sequelize.INTEGER,
      allowNull:false,
  },
  FromDate:{
      type:Sequelize.DATE,
      allowNull:false,    
  },
  ToDate:{
      type:Sequelize.DATE,
      allowNull:false,
  }
},{
    freezeTableName: true, 
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports=Batch;