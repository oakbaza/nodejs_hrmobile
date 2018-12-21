var mydb = require('./config.js');
var mysql = require('mysql');

mydb.con.connect(function(err){
    console.log("Connected!!")
})//connect db

var get_all_person = function(callback){
        var sql = "SELECT ps_fname,ps_lname,admin_name FROM `hr_person`"
        sql += "JOIN hr_admin ON ps_admin_id = hr_admin.admin_id "
        mydb.con.query(sql,function(err,result,field){
           // console.log(result)
           callback(result)
        })
    }
exports.get_all_person = get_all_person // export model

