(function() {

    var Class = rootRequire('utils/jhClass'),
        ISite2QueryBuilder = require('./iSite2QueryBuilder'),
        ISite2ContentReaderGateway = require('../gateways/iSite2ContentReader'),
        AssetTransformer = require('./assetTransformer');

    module.exports = Class.create({

        aSERVICES: null,

        constructor: function()
        {
            this.aSERVICES = [
                new iSite2QueryBuilder(),
                new iSite2ContentReaderGateway(),
                new AssetTransformer()
            ];
        },

        search: function(searchEvent)
        {
            // pass the event through the pipeline
            for( var i = 0; i < this.aSERVICES.length; i++ )
            {
                searchEvent = this.aSERVICES[i].process(searchEvent);
            }

            return searchEvent;
        }
    });

}());