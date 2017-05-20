var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var server = server.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
