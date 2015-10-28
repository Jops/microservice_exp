(function() {

    var Class = rootRequire('utils/jhClass'),
        SearchByIdEvent = require('../events/searchByIdEvent'),
        Pipeline = require('../services/pipeline');

    module.exports = Class.create({

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
                var pipeline = new Pipeline();
                var serviceResponce = pipeline.search(searchEvent);

                this.view = '<p>OK</p>' +
                '<p>' + serviceResponce.xml.xmlString + '</p>';
            }
            else
            {
                // set bad request view
                this.view = '<p>BAD</p>';
            }

            // respond with view
            res.send(this.view);
        }
    });

}());