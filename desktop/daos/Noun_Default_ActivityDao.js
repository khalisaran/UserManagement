var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Noun_Default_Activity_SQL.properties');
module.exports.create_Noun = function(Noun,callback) {
  var create_query = sqlQuery._properties.create_Noun;
  sequelize.query(create_query, {
    replacements: {
    	name : Noun.name,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Noun
  }).then(function(noun) {
		callback(noun);
	});
}
module.exports.update_Noun = function(Noun,callback) {
  var update_query = sqlQuery._properties.update_Noun;
  sequelize.query(update_query, {
    replacements: {
    	id : Noun.id,
    	name : Noun.name,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Noun
  }).then(function(noun) {
		callback(noun);
	});
}
module.exports.search_Noun_for_update = function(Noun_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Noun;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Noun_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Noun
  }).then(function(noun) {
		callback(noun[0]);
	});
}
module.exports.delete_Noun = function(Noun_id,callback) {
  var delete_query = sqlQuery._properties.delete_Noun;
  sequelize.query(delete_query, {
    replacements: {
    	id: Noun_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Noun
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Noun = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Noun;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Noun
  }).then(function(noun) {
		callback(noun);
	});
}