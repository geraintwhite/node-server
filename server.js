var url = require('url');
var port = 1337;

exports.start = function (route) {
    require('http')
        .createServer(function (req, res) {
            var path = url.parse(req.url).pathname;
            if (path != '/favicon.ico') {
                console.log('Request for ' + path + ' received');

                route(path, function (out){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(out);
                });
            }
        })
        .listen(port);
        console.log('Server started on port ' + port);
}