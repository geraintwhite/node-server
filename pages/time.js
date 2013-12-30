function result (cb) {
    cb('The time is ' + new Date().toLocaleTimeString());
}

exports.result = result;