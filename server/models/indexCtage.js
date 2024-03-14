

module.exports = (sequelize, DataTypes) => {
    const categ = sequelize.define("categ", {
        name: DataTypes.ENUM([
          "css",
          "c",
          "c++",
          "sql",
          "No Options",
        ]),
        defaultValue: "No options",

      },);
  
    return categ;
  };