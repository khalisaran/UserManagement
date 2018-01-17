var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Users_SQL.properties');

module.exports.get_all_Users = function(callback) {
    var get_all_query = sqlQuery._properties.get_all_Users;
    sequelize.query(get_all_query, {
      type : sequelize.QueryTypes.SELECT,
      model: models.Users
    }).then(function(users) {
          callback(users);
      });
  }

  //savejseportuser
  module.exports.savejseportuser = function(data,reportname,callback) {
    var create_query = sqlQuery._properties.savejseportuser;
    console.log("the dao data ---->",data,reportname)
    sequelize.query(create_query, {
      replacements: {
         reportname : reportname,
         username : data.username
      },
      type : sequelize.QueryTypes.INSERT,
    }).then(function() {
          callback();
      });
  }

  module.exports.deletejsreportuser = function(reportname,callback){
    var delete_query = sqlQuery._properties.delete_jsreportuser;
    sequelize.query(delete_query, {
      replacements: {
        reportname: reportname
      },
      type : sequelize.QueryTypes.DELETE,
    }).then(function() {
      callback();
    });
  }

  module.exports.getjsreport_for_user = function(reportname,callback){
    var get_query = sqlQuery._properties.getjsreport_for_user;
    sequelize.query(get_query, {
      replacements: {
        reportname: reportname
      },
      type : sequelize.QueryTypes.SELECT,
      model : models.Jsreport
    }).then(function(jsreport) {
      callback(jsreport);
    });
  }

  module.exports.getreport_by_user = function(username,callback){
    var get_query = sqlQuery._properties.getjsreport_by_user;
    sequelize.query(get_query,{
      replacements:{
        username: username
      },
      type : sequelize.QueryTypes.SELECT,
      model : models.Jsreport
    }).then(function(jsreport) {
      callback(jsreport);
    })
  }