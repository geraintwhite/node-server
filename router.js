exports.route = function (path, cb) {
    switch (path) {
        case '/':
            cb('Welcome to my little test');
            break;

        case '/time':
            cb('The time is ' + new Date().toLocaleTimeString());
            break;

        case '/users':
            require('./mysql')
                .query('SELECT * FROM users', function (err, rows, fields) {
                    if (err) {
                        cb(err.toString());
                    } else {
                        cb(JSON.stringify(rows));
                    }
                });
            break

        default:
            cb('Unable to locate the requested page');
    }
    return;
}