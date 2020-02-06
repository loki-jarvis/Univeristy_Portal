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
 
console.log("Connected to Mysql");
connection.connect();

var sql = "SELECT * FROM nss_volunteer_details";
 var result;
var no_records;
var query = connection.query(sql, function(err, result) {
    console.log("Total Records:- " + result.length);
no_records=result;
});


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    //res.render('pages/index');

    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline,
        no_records:no_records
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('8080 is the magic port');