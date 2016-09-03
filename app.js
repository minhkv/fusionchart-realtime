var config = require('./config.js');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static('public'));



app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/html/index.html');
	res.end();
});

app.post('/api/data', function(req, res) {
	console.log(req.body);
	io.emit('data', req.body.data);
	res.end();
});

http.listen(config.port, config.host);

io.on('connection', function(socket){
  	console.log('a user connected');
});

