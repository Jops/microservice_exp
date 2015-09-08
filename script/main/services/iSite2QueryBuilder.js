(function() {

    var Class = rootRequire('utils/jhClass'),
        JsonQueryEvent = require('../events/jsonQueryEvent');

    module.exports = Class.create({
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
    });

}());