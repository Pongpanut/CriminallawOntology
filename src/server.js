/* โหลด Express มาใช้งาน */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uri = 'mongodb://localhost/criminallaw';
var db = mongoose.connect(uri);

mongoose.connection.on("open", function(){
  console.log("mongodb is connected")}  //this gets printed
);

 var Schema = mongoose.Schema;
 

// action schema
var Action = new Schema({
    id: Number,
    name: String
}, { collection: 'actor' });
Action.set('collection', 'actor');

var posts = mongoose.model('actor', Action);


// เริ่ม express
var app = express();


var actorRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    posts.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

app.disable('etag');
app.use('/getActorData',actorRes);

var port = 3000;
app.listen(port)
console.log('Server is running at port 3000');
module.exports = app;
 
