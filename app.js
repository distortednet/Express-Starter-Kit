var express = require('express'),
	config = require('./config'),
	helpers = require('./helpers'),
	bodyParser = require('body-parser'),
	app = express(),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	swig = require('swig');



app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views/static'));
app.use(cookieParser());
app.use(session({secret: 'anything', resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view cache', false);
swig.setDefaults({cache: false});

app.locals = {

};

/* gets */
app.get('*', function(req, res, next) {
	next();
});
app.get('/', function(req, res) {
  res.render('index', {test: "your app is ready"});
});

app.get('*', function(req, res, next) {
	res.render('404');
});

var server = app.listen(8080, function() {
	console.log('listening on:' + 8080);
});
