'use strict';

module.exports = function(sequelize, DataTypes) {
  var Noun = sequelize.define("Noun", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    name: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Noun;
};