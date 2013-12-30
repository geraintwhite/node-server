mysql = require('../mysql');

function result (cb) {
    mysql.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
            cb(err.toString());
        } else {
            cb(JSON.stringify(rows));
        }
    });
}

exports.result = result;