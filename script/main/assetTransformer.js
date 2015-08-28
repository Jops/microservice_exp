(function() {

    var path = require('path');

    var AssetTransformer = {
        constructor: function()
        {
        },

        process: function(query)
        {
            // extract xml from event
            // transform the xml
            // create xml event to contain transformed xml
            // return event
            return new XmlEvent({
                xmlString: 'some xml'
            });
        }
    };

    var Class = AssetTransformer.constructor;
    Class.prototype = AssetTransformer;
    module.exports = Class;

}());