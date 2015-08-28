(function() {

    var path = require('path'),
        Gateway = require('./gateway');

    var Router = {

        gateway: null,

        constructor: function( express, app, dir )
        {
            this.gateway = new Gateway();

            app.get(
                '/searchById/:id',
                this.gateway.searchById
            );

            app.get(
                '/status',
                function(req, res) {
                    res.send('OK');
                }
            );
        }
    };

    var Class = Router.constructor;
    Class.prototype = Router;
    module.exports = Class;

}());