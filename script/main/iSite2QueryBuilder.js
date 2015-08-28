(function() {

    var path = require('path'),
        JsonQueryEvent = require('./events/jsonQueryEvent');

    var iSite2QueryBuilder = {
        constructor: function()
        {
        },

        process: function(query)
        {
            // assertain the type of query
            // build query json
            // build json query event and return
            return new JsonQueryEvent({
                id: query.id,
                something: 'interesting'
            });
        }
    };

    var Class = iSite2QueryBuilder.constructor;
    Class.prototype = iSite2QueryBuilder;
    module.exports = Class;

}());