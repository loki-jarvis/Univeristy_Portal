var express = require('express')
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var app = express()
app.set('view engine', 'hbs');
app.use(express.static("public"));
app.use(fileUpload());
var server = require('http').Server(app);
var mongo = require('mongodb');
var users = require('./routes/users.js');

var monk = require('monk');

var db = monk('localhost:27017/tutorialjs');

//var db=require('./db_conn/db_connection.js');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    debug: false,
});
 
console.log("Connected to Mysql");


mongoose.connect('mongodb://localhost/csvimpor');


app.use('/users', users);

app.use(function(req,res,next){

    req.db = db;

    next();

});
// connection.connect();

// var sql = "SELECT * FROM nss_volunteer_details";
//  var result;
// var no_records;
//  var query = connection.query(sql, function(err, result) {
//     console.log("Total Records:- " + result.length);
// no_records=result;
// }); 




app.get('/', function (req, res) {
    res.render("slider.hbs",{layout:"header.hbs"});

})
app.get('/home', function (req, res) {
    res.render("slider.hbs",{layout:"header.hbs"});

})

app.get('/programs', function (req, res) {
//console.log(no_records);
    res.render("programs.hbs",{layout:"header_mod.hbs",data:JSON.stringify(no_records)});
    //res.render("programs.hbs",{layout:"header_mod.hbs"});

})


app.get('/about_course', function (req, res) {
    res.render("about_course.hbs",{layout:"header_mod.hbs"});

})


app.get('/course_structure', function (req, res) {
    res.render("course_structure.hbs",{layout:"header_mod.hbs"});

})

app.get('/eligibility', function (req, res) {
    res.render("eligibility.hbs",{layout:"header_mod.hbs"});

})

app.get('/syllabus', function (req, res) {
    res.render("syllabus.hbs",{layout:"header_mod.hbs"});

})

app.get('/infrastructure', function (req, res) {
    res.render("infrastructure.hbs",{layout:"header_mod.hbs"});

})

app.get('/faculty_details', function (req, res) {
    res.render("faculty_details.hbs",{layout:"header.hbs"});

})

app.get('/bos', function (req, res) {
    res.render("bos_data.hbs",{layout:"header_mod.hbs"});

})

app.get('/infrastructure', function (req, res) {
    res.render("infrastructure.hbs",{layout:"header_mod.hbs"});

})

app.get('/research_publications', function (req, res) {
    res.render("research_publications.hbs",{layout:"header_mod.hbs"});

})

app.get('/achievements', function (req, res) {
    res.render("achievements.hbs",{layout:"header_mod.hbs"});

})

app.get('/alumini', function (req, res) {
    res.render("alumini.hbs",{layout:"header_mod.hbs"});

})

app.get('/contact', function (req, res) {
    res.render("contact.hbs",{layout:"header_mod.hbs"});

})

app.get('/resultpo', function (req, res) {
    res.render("resultpo.hbs",{layout:"header_mod.hbs"});

})

app.get('/resultp', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/resultp', upload.post);
/*
app.get('/programs', function (req, res) {
    let data={"k1":"kasi","k2":"kkd"};
 res.render("programs.hbs", { layout:"header_sms.hbs",data });
//console.log("para", req.params);
    
    // res.render("admin.hbs");
    //res.write('keshav')
    //res.end()

})

app.get('/about-course', function (req, res) {
    
 res.render("about_course.hbs", { layout:"header_sms.hbs" });
//console.log("para", req.params);
    
    // res.render("admin.hbs");
    //res.write('keshav')
    //res.end()

})
app.get('/course-structure', function (req, res) {
    
 res.render("course_structure.hbs", { layout:"header_sms.hbs" });

})

app.get('/downloads', function(req, res){
  const file = './downloads/Course-Structure-2016-2017.docx';
  res.download(file); // Set disposition and send it.
});


app.get('/eligibility', function (req, res) {
    
 res.render("eligibility.hbs", { layout:"header_sms.hbs" });

})
app.get('/syllabus', function (req, res) {
    
 res.render("syllabus.hbs", { layout:"header_sms.hbs" });

})
app.get('/infra-structure', function (req, res) {
    
 res.render("infrastructure.hbs", { layout:"header_sms.hbs" });

})
app.get('/faculty', function (req, res) {
    
 res.render("faculty_details.hbs", { layout:"header_sms.hbs" });

})
app.get('/bos', function (req, res) {
    
 res.render("bos.hbs", { layout:"header_sms.hbs" });

})
app.get('/reasearch-publications', function (req, res) {
    
 res.render("r_p.hbs", { layout:"header_sms.hbs" });

})

app.get('/forthcoming-events', function (req, res) {
    
 res.render("Forthcomin_ Events.hbs", { layout:"header_sms.hbs" });

})
app.get('/past-events', function (req, res) {
    
 res.render("past.hbs", { layout:"header_sms.hbs" });

})
app.get('/placements', function (req, res) {
    
 res.render("placements.hbs", { layout:"header_sms.hbs" });

})
app.get('/achivements', function (req, res) {
    
 res.render("ache.hbs", { layout:"header_sms.hbs" });

})
app.get('/alumni', function (req, res) {
    
 res.render("alumi.hbs", { layout:"header_sms.hbs" });

})
app.get('/contact-us', function (req, res) {
    
 res.render("cont.hbs", { layout:"header_sms.hbs" });

})
app.get('/login/:a/:b', function (req, res) {
    
 res.render("login.hbs", { layout:"header.hbs" },{ v1: req.params.a,v2: req.params.b });
console.log("para", req.params);
    
    // res.render("admin.hbs");
    //res.write('keshav')
    //res.end()

})


app.get('/nm/:k1/:k2', function (req, res) {
    console.log("para", req.params,req.params.k1);
    //  let data = 
    // res.render("get_values.hbs", { data : JSON.stringify(req.params)});
    res.render("get_values.hbs", { v1: req.params.k1,v2: req.params.k2 });

    
    // res.render("admin.hbs");
    //res.write('keshav')
    //res.end()

})
app.get('/j2',function(req,res){
    res.render("kview1.hbs",{layout : "klayout2.hbs"});
})
app.get('/admin/:k1/:k2', function (req, res) {
    console.log("para", req.params);
    res.render("admin.hbs");

})

*/
app.listen(3000)