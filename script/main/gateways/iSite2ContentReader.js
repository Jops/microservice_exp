(function() {

    var Class = rootRequire('utils/jhClass'),
        XmlEvent = require('../events/xmlEvent');

    module.exports = Class.create({
        constructor: function()
        {
        },

        process: function(query)
        {
            // make call to Content Reader using json query
            // from expected query event
            // create xml event and return
            return new XmlEvent({
                xmlString: 'some xml'
            });
        }
    });

}());