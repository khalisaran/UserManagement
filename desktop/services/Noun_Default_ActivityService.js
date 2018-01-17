var dao = require("../daos/Noun_Default_ActivityDao")
module.exports.create_Noun = function(Noun,callback) {
  dao.create_Noun(Noun,function (noun){
    callback(noun);
  });
}
module.exports.update_Noun = function(Noun,callback) {
  dao.update_Noun(Noun,function (noun){
    callback(noun);
  });
}
module.exports.search_Noun_for_update = function(Noun_id,callback) {
  dao.search_Noun_for_update(Noun_id,function (noun){
    callback(noun)
  });
}
module.exports.delete_Noun = function(Noun_id,callback) {
  dao.delete_Noun(Noun_id,function (){
    callback();
  });
}
module.exports.get_all_Noun = function(callback) {
  dao.get_all_Noun(function (list_of_noun){
    callback(list_of_noun)
  });
}