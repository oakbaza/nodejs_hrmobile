var mydb = require('./config.js');
var mysql = require('mysql');

mydb.con.connect(function(err){
    console.log("Connected!!")
})//connect db

var get_all_person = function(){
        var sql = "SELECT * FROM hr_person";
        mydb.con.query(sql,function(err,result,field){
            return(result)
        })
    }
   /* var get_all_person = function(callback){
        var sql = "SELECT cfg_id, cfg_trs_name, bacName, desc_description\
                    FROM ac_config \
                    LEFT JOIN ac_bankaccount ON cfg_bac_id = bacId \
                    LEFT JOIN ac_description ON cfg_desc_id = desc_id"
            db.query(sql, function (err, result, fields){
                if(err){
                    callback(err,null);
                }else{
                    //console.log(result)
                    callback(result);
                }
            });//query
    
    }*/
// exports.getall = getall //export model
exports.get_all_person = get_all_person // export model