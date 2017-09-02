var express = require('express');
var app = express();

app.use(express.static(__dirname + "/templates"));

app.listen(8000);
console.log("Running on port 8000");
