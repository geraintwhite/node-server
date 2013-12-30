exports.query = function (sql, cb) {
    require('mysql')
        .createConnection({ 
            user: "root",
            password: "miranda96",
            database: "main"
        })
        .query(sql, cb)
};