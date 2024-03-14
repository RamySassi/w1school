

module.exports = (sequelize, DataTypes) => {
    const school = sequelize.define("school", {
     name: DataTypes.STRING , 
     description: DataTypes.STRING,
     exemple:DataTypes.STRING
    });
  
    return school;
  };