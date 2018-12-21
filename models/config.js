var mysql = require('mysql');
var config = mysql.createConnection({
  		host: "10.80.39.17",
  		user: "team7",
 		password: "team7@tsp59",
		database : "school_hrdb"
})
exports.con = config;

