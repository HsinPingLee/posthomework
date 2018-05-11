const express = require('express')
const app = express()
const port = 10129 
const bodyParser = require('body-parser')//post

//read json file
var fs = require("fs");
var content = fs.readFileSync("./public/name.json");
var jsonfile=JSON.parse(content);
//console.log(jsonfile)

app.use(bodyParser.json());    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  //to support URL-encided bodies
  exterded: true
}));

app.listen(port)
app.use(express.static(__dirname + '/public'))

app.get('/get_data', function(req, res) {
  //get=>query
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

app.get("/ajax_data", function(req,res){
  res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})

app.post("/ajax_data2", function(req,res){
  fname = req.body.fname
  console.log(fname)
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})


app.post("/post_data", function(req, res) {
  fname = req.body.fname //post=>body
  res.send(`<h1>Hello, ${jsonfile[fname]}</h1>`)
})

