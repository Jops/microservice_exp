(function() {

    var path = require('path'),
        SearchByIdEvent = require('./events/searchByIdEvent'),
        Pipeline = require('./pipeline');

    var Gateway = {

        view: '',

        constructor: function()
        {
        },

        searchById: function(req, res) {
            // go to pipeline
            if( req.params.id )
            {
                // create command/query event
                var searchEvent = new SearchByIdEvent(req.params.id);
                // send event to the pipeline
                // var pipeline = new Pipeline();
                // var serviceResponce = pipeline.search(searchEvent);

                this.view = '<p>OK</p>';
            }
            else
            {
                // set bad request view
                this.view = '<p>BAD</p>';
            }

            // respond with view
            res.send(this.view);
        }
    };

    var Class = Gateway.constructor;
    Class.prototype = Gateway;
    module.exports = Class;

}());