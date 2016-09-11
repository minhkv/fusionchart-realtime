var config = require('./config.js');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'f',
  database : 'fusionchart'
});

connection.connect();
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/html/index.html');
	res.end();
});

app.post('/api/data', function(req, res) {
	console.log(req.body);
	io.emit('data', req.body.data);
	connection.query('INSERT INTO `fusionchart`.`data` (`time`, `value`) VALUES (?, ?)',[(new Date()).getTime(), req.body.data],  function (err, results) {
		if(err) throw err;
		console.log(results);
	});
	res.end();

}, function(){
	connection.end();
});


http.listen(config.port, config.host);

io.on('connection', function(socket){
  	console.log('a user connected');
});

