const Sequelize=require('sequelize')
const sequelize=new Sequelize('crmApi','root','root',{dialect:'mysql',host:'localhost'})
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
module.exports=sequelize


// jdbc:mysql://127.0.0.1:3306/?user=root