var mysql = require('mysql');

function query (sql, cb) {
    mysql.createConnection({ 
        user: "root",
        password: "miranda96",
        database: "main"
    })
    .query(sql, cb);
};

exports.query = query;