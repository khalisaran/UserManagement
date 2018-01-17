var service = require("../services/Noun_Default_ActivityService")
module.exports.create_Noun = function(req, res) {
  var Noun = req.body;
  service.create_Noun(Noun,function (noun){
    res.status(201);
    res.json(noun);
  });
}
module.exports.update_Noun = function(req, res) {
  var Noun = req.body;
  service.update_Noun(Noun,function (noun){
    res.status(201);
    res.json(noun);

  });
}
module.exports.search_Noun_for_update = function(req, res) {
  var Noun_id = parseInt(req.params[0], 10);
  service.search_Noun_for_update(Noun_id,function (noun){
    res.json(noun);
  });
}
module.exports.delete_Noun = function(req, res) {
  var Noun_id = parseInt(req.params[0], 10);
  service.delete_Noun(Noun_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Noun = function(req, res) {
  var noun_id = req.query.id;

  service.get_all_Noun(function (noun){
    res.json(noun);
  });
}