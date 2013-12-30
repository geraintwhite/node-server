exports.getUsers = function (cb) {
    require('mysql')
        .createConnection({ 
            user: "root",
            password: "miranda96",
            database: "main"
        })
        .query('SELECT * FROM users', function (err, rows, fields) {
            if (err) return cb(err.toString());
            cb(JSON.stringify(rows));
        });
};