var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'f',
  database : 'fusionchart'
});


connection.connect();

connection.query('SELECT * from `fusionchart`.data', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0]);
});

connection.query('INSERT INTO `fusionchart`.`data` (`time`, `value`) VALUES (?, ?)',[(new Date()).getTime(), 16],  function (err, results) {
	if(err) throw err;
	console.log(results);
});

connection.end();

