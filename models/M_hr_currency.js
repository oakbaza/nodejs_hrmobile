var mydb = require('./config.js');

var get_all_by_active = function(callback){
    var sql =  "SELECT * \
                FROM hr_currency \
                WHERE cu_active = 'Y' ";
    mydb.con.query(sql,function(err,result,field){
        // console.log(result)
        callback(result)
     })
}

exports.get_all_by_active = get_all_by_active;