var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
// var studentsController = require('./controllers/students.js');
var config = require('./config.js');
// var massive = require('massive');
// var projects = require('./controllers/projectController');
// var connectionString = "postgres://postgres:Myvault2@localhost/devdiscover";
// var massiveInstance = massive.connectSync({connectionString : connectionString})
var app = express();

// app.set('db', massiveInstance);
// var db = app.get('db');
// Cores options allow for cors - not secure change!!!!
var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//
app.use(session({
	secret: config.sessionSecret,
	resave: true,
	saveUninitialized: false,
	cookie: {
		maxAge:(1000*60*60*24*7)
	}
}));

app.listen(3000, function(){
  console.log('I\'m listening on port 3000');
})
