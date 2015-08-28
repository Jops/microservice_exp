(function() {

    var path = require('path'),
        XmlEvent = require('./events/xmlEvent');

    var iSite2ContentReaderGateway = {
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
    };

    var Class = iSite2ContentReaderGateway.constructor;
    Class.prototype = iSite2ContentReaderGateway;
    module.exports = Class;

}());