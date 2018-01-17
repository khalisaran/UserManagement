var service = require("../services/UserService")

module.exports.get_all_Users = function(req, res) {

  service.get_all_Users(function (list_of_users){
    res.json(list_of_users);
  });

}

module.exports.savejseportuser = function(req,res){
  var list_of_users = req.body;
  console.log("the data ----->",list_of_users)

  service.savejseportuser(list_of_users,function(user){
    res.status(201);
    res.json(list_of_users);
  })
}

module.exports.getjsreport_for_user = function(req,res){
  var reportname = req.params.reportname;
  service.getjsreport_for_user(reportname,function (list_report){
    res.json(list_report);
  });
}

module.exports.getreport_by_user = function(req,res){
  var username = req.params.username;
  service.getreport_by_user(username , function(list_report){
    res.status(201)
    res.json(list_report)
  })
}