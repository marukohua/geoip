var express = require('express');
var http = require('http');
var apiRouter = require('./router');

// var ip = "207.97.227.239";
// var geo = geoip.lookup(ip);

var app = express();

app.set('port', 3000);

// router
app.use('/', apiRouter);


var server = http.createServer(app);
server.listen(3000);
console.log("server start listening port 3000");