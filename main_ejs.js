var express = require('express');

var express_layouts = require('express-ejs-layouts');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express_layouts);

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    debug: false,
});
app.get('/', function(req, res) {
	app.set('layout','layout');
		res.render('page1');
	});
app.get('/about', function(req, res) {
	app.set('layout','layout1');
		res.render('about')
	});
app.listen(3000);
console.log('8080 is the magic port');