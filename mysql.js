var mysql = require('mysql');

function query (sql, cb) {
    mysql.createConnection({ 
        user: "{node-test.git_mysqlUser}",
        password: "{node-test.git_mysqlPass}",
        database: "{node-test.git_mysqlDB}"
    })
    .query(sql, cb);
};

exports.query = query;