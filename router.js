exports.route = function (path, cb) {
    switch (path) {
        case '/':
            cb('Welcome to my little test');
            break;
        case '/time':
            cb('The time is ' + new Date().toLocaleTimeString());
            break;
        case '/users':
            require('./mysql').getUsers(function (res) {
                cb(res);
            });
            break
        default:
            cb('Unable to locate the requested page');
    }
    return;
}