(function() {

    var Class = rootRequire('utils/jhClass'),
        MainGateway = require('./gateways/appRest');

    module.exports = Class.create({

        mainGateway: null,

        constructor: function( express, app, dir )
        {
            this.mainGateway = new MainGateway();

            app.get(
                '/search-by-id/:id',
                this.mainGateway.searchById
            );

            app.get(
                '/status',
                function(req, res) {
                    res.send('OK');
                }
            );
        }
    });

}());