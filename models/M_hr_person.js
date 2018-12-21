var mydb = require('./config.js');
var mysql = require('mysql');

mydb.con.connect(function(err){
    console.log("Connected!!")
})//connect db

var get_all_person = function(callback){
        var sql = "SELECT * FROM hr_person";
        mydb.con.query(sql,function(err,result,field){
           // console.log(result)
           callback(result)
        })
    }
exports.get_all_person = get_all_person // export model