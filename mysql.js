var mysql = require('mysql');

function query (sql, cb) {
    mysql.createConnection({ 
        user: "{node-test_mysqlUser}",
        password: "{node-test_mysqlPass}",
        database: "{node-test_db}"
    })
    .query(sql, cb);
};

exports.query = query;