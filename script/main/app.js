var express = require('express'),
    app = express(),
    Router = require('./router');

var router = new Router( express, app, __dirname );

var server = app.listen( process.env.npm_package_config_port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
