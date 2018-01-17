'use strict';

module.exports = function(sequelize, DataTypes) {
  var Jsreport = sequelize.define("Jsreport", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    reportname: DataTypes.STRING,
    username: DataTypes.STRING
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Jsreport;
};
