var mydb = require('./config.js');

var get_all_by_active = function(callback){
    var sql =  "SELECT ex_id,ex_type,cu_name \
                FROM hr_expenditure \
                LEFT JOIN hr_currency ON ex_cu_id = cu_id \
                WHERE ex_active = 'Y' ";
    mydb.con.query(sql,function(err,result,field){
        // console.log(result)
        callback(result)
     })
}

exports.get_all_by_active = get_all_by_active;