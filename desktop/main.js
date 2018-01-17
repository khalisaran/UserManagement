var express = require("express");
var http = require("http");
var path = require("path");
var models = require("./models");
var router = require("./routes/routes");
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();
var clientPath = path.resolve(__dirname, "client");
var auth = require('./auth/auth.js')();
var jwt = require('jwt-simple');
var confJWT = require('./config/config.json').jwt;


app.use(bodyParser.json({limit: '50mb'}))
app.use(auth.initialize());

app.use(logger("dev"));
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if ( req.method === 'OPTIONS' ) {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});

app.post('/auth/login', function(req, res) {
	if (req.body.username && req.body.password) {
		var username = req.body.username;
		var password = req.body.password;
			models.Users.findOne({ where: {username: username, password: password} }).then(function(data) {
			console.log("passport----->"+data);
			var user = data;
			if(user) {
			var payload = {
			id: user.id
			};
			var token = jwt.encode(payload, confJWT.jwtSecret);
			res.json({
			token: token,
			user: user.toJSON()
			});
			} else {
			res.sendStatus(401);
			}
			});
		} else {
		res.sendStatus(401);
	}
});
	app.get('/user', auth.authenticate(), function(req, res) {
		models.Users.findOne({ where: {id: req.user.id} }).then(function(data) {
		console.log("passport----->"+data);
		var user = data;
		if(user) {
		res.json(user);
	}
	});
});

app.use("/",express.static(clientPath));
app.use("/api",auth.authenticate(), router);
app.all('*', function (req, res) { 
  res.status(200).sendFile(path.join(__dirname, '/client/index.html')); 
});


models.sequelize.sync().then(function () {
  var server = app.listen(8080, function() {
  console.log('Express server listening on port ' + server.address().port);
  });
});