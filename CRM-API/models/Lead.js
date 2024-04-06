const sequelize = require("../sequelize");
const Sequelize = require("sequelize");

const Lead = sequelize.define(
  "Leads",
  {
    LeadID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    ClientID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    LeadDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    LeadName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    LeadSource: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    LeadNote: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    LeadStatus: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    LeadStatusDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    NextFollowUpDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    LeadType: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    CompanyName: {
      type: Sequelize.STRING,
      allowNull: true,
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

module.exports = Lead;
