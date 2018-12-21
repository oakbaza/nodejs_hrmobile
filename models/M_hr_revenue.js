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

var insert = function(json){
    var sql = "INSERT INTO hr_revenue(re_type,re_active,re_cu_id,re_us_id,re_update) \
                values ('"+json.re_type+"','"+json.re_active+"','"+json.re_cu_id+"','"+json.re_us_id+"','"+json.re_update+"')";
    mydb.con.query(sql,function(err){
        console.log(err)
    })
}

var update = function(json){
    var sql = "UPDATE hr_revenue \
                SET re_type = '"+json.re_type+"', \
                    re_active = '"+json.re_active+"', \
                    re_cu_id = '"+json.re_cu_id+"', \
                    re_us_id = '"+json.re_us_id+"', \
                    re_update =  '"+json.re_update+"'\
                WHERE re_id = '"+json.re_id+"'";
    mydb.con.query(sql,function(err){
        console.log(err)
    })
}

var delete_by_re_id = function(json){
    var sql = "UPDATE hr_revenue \
                SET re_active = '"+json.re_active+"', \
                WHERE re_id = '"+json.re_id+"'";
    mydb.con.query(sql,function(err){
        console.log(err)
    })
}



exports.get_all_by_active = get_all_by_active;
exports.insert = insert;
exports.update = update;
exports.delete_by_re_id = delete_by_re_id;