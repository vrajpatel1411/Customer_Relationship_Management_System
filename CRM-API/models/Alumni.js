const sequelize = require("../sequelize");
const Sequelize = require("sequelize");

const Alumni = sequelize.define(
  "Alumni",
  {
    AlumniID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    ClientID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    LeadID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
    },
    BatchID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    ProdID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Alumni;
