var mydb = require('./config.js');

var get_all_by_active = function(callback){
    var sql =  "SELECT re_id,re_type,cu_name \
                FROM hr_revenue \
                LEFT JOIN hr_currency ON re_cu_id = cu_id \
                WHERE re_active = 'Y' ";
    mydb.con.query(sql,function(err,result,field){
        // console.log(result)
        callback(result)
     })
}

exports.get_all_by_active = get_all_by_active;