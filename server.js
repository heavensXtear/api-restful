const express = require('express');
const app = express();
const fs = require("fs");

let user = {
  "user4" : {
    "name" : "password4",
    "profession" : "teacher",
    "id" : 4
  }
}


app.get('/listUsers',function(req,res){
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
    console.log(data);
    res.send(data);
  });
})

app.post('/addUsers', function(req,res){
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.send(JSON.stringify(data));
  });
})

app.get('/:id',function(req,res){
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
    if(err) throw err;
    let users = JSON.parse(data);
    let user = users["user" + req.params.id];
    console.log("User Info by id" + JSON.stringify(user));
    res.send(JSON.stringify(data));
  });
})

let server = app.listen(8081,function(){
  let host = server.address().address
  let port = server.address().port
  console.log("Launch API restful with the following URI http://%s:%s",host,port)
})
