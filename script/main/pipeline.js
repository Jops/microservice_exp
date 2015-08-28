(function() {

    var path = require('path'),
        ISite2QueryBuilder = require('./iSite2QueryBuilder'),
        ISite2ContentReaderGateway = require('./iSite2ContentReaderGateway'),
        AssetTransformer = require('./assetTransformer');

    var Pipeline = {

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
    };

    var Class = Pipeline.constructor;
    Class.prototype = Pipeline;
    module.exports = Class;

}());