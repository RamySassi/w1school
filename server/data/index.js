const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("school", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
  });

const db = {};
db.school =  require('../models/index')(sequelize,DataTypes)
db.categ =  require('../models/indexCtage')(sequelize,DataTypes)

sequelize.authenticate()
.then(() => 
  console.log('successfully! '))
.catch((error) => {throw error})
  
  // sequelize.sync()
module.exports = db;
