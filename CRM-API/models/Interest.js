const sequelize = require("../sequelize");
const Sequelize = require("sequelize");

const interest = sequelize.define(
  "InterestedIn",
  {
    InterestedInID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    LeadID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ClientID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ProdID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    BatchID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    InterestedInStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    InterestedInStatusDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    Status: {
      type: Sequelize.BOOLEAN,
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

module.exports = interest;
