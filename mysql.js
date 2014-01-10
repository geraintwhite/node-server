var mysql = require('mysql');

function query (sql, cb) {
    mysql.createConnection({ 
        user: "root",
        password: "password",
        database: "main"
    })
    .query(sql, cb);
};

exports.query = query;
