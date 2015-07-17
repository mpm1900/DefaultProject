// MODULE INCLUDES
var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    socketio = require('socket.io'),
    less = require('less')

var config = {
  clientVersion: 'client-ng2',
  port: 8080
}

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(express.static(path.join(__dirname, '../' + config.clientVersion)));

app.get('/',function(req, res){//get,put,post,delete
      res.sendFile('index.html');
});

server.listen(config.port);
