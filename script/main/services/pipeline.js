(function() {

    var Class = rootRequire('utils/jhClass'),
        ISite2QueryBuilder = require('../gateways/iSite2QueryBuilder'),
        ISite2ContentReader = require('../gateways/iSite2ContentReader'),
        AssetTransformer = require('../gateways/assetTransformer');

    module.exports = Class.create({

        aSERVICES: null,

        constructor: function()
        {
            this.aSERVICES = [
                new ISite2QueryBuilder(),
                new ISite2ContentReader(),
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