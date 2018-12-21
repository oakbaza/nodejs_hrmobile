var config = require('./models/config');
var mysql = require('mysql');
var db = mysql.createConnection(config.mysql_connect);
console.log(config.mysql_connect);

var http = require('http');
	http.createServer(function (req, res) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Hello SE by Node.js</h1>');
            res.write('<h1>echo</h1>');
    		res.end();
	}).listen(8080,'127.0.0.1');
