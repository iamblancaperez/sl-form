// app.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile('static/index.html');
});

app.put('/user', function (req, res) {
  var isValid = true;
  var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  for (var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      if(key=="email"){
        isValid = isValid && req.body[key] !== "" && regexEmail.test(req.body[key]);
      }
      if(key=="color"){
        isValid = isValid && req.body[key] != "" && (req.body[key]=="blue" || req.body[key]=="green") 
      }
      if(key=="number"){
        isValid = isValid && req.body[key] != "" && (req.body[key]=="1" || req.body[key]=="2" || req.body[key]=="3") 
      }
    }
  }
  if(isValid){
    res.status(200).json({ status: "Valido!" })
  }else{
    res.status(400).json({ status: "Error" })
  }
  res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});