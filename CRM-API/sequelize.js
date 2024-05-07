const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "b35o7015bfl1qptpafon",
  "umb9abatlpc4sdws",
  "Ow7P78aaZWE9Nc3km7af",
  {
    dialect: "mysql",
    host: "b35o7015bfl1qptpafon-mysql.services.clever-cloud.com",
  }
);
// const sequelize = new Sequelize("CRM", "Vraj", "ignite@123", {
//   dialect: "mssql",
//   host: "43.255.152.25",
// });
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
module.exports = sequelize;

// jdbc:mysql://127.0.0.1:3306/?user=root
