mysql = require('../mysql');
templates = require('../templates')

function result (cb) {
    mysql.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
            cb(err.toString());
        } else {
            cb(template(rows, 'usertable.html'))
        }
    });
}

exports.result = result;