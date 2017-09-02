var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contacts',['contacts']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/templates"));
app.use(bodyParser.json());

app.get('/contacts', function(req,res){
  console.log("GET Request");
  db.contacts.find(function(err,docs){
    console.log("docs");
    res.json(docs);
  });
});

app.post('/contacts', function(req,res){
  console.log(req.body);
  db.contacts.insert(req.body, function(err,doc){
    res.json(doc);
  });
});

app.delete('/contacts/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contacts.remove({_id: mongojs.ObjectId(id)}, function(err,docs){
    res.json(doc);
  });
});

app.listen(8000);
console.log("Running on port 8000");
