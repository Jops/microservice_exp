global.rootRequire = function( name ) {
    return require( __dirname + '/' + name );
};

var argv = require('minimist')( process.argv.slice(2) ),
    config = require( './fixtures/' + argv.config + '.json' );

config.version = argv.v || argv.version || config.version;

var express = require('express'),
    app = express();

config.routes.forEach( function( route, i )
{
    var resp = argv._[i] || config.responses[route.name] || '500';
    app.get(
        '/' + config.domain + '/' + config.version + route.route,
        function( req, res ) {
            res.status(resp).json( eval( route[resp] ) );
        }
    );
} );

app.get(
    '/' + config.domain + '/status',
    function(req, res) {
        res.send(
            '<p>OK</p>' +
            '<section>' +
                '<p>Config:</p>' +
                '<p>' + JSON.stringify(config) + '</p>' +
            '</section>'
        );
    }
);

var server = app.listen( argv.port || 4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Microwave v' + config.version + ' listening at http://%s:%s', host, port);
});
