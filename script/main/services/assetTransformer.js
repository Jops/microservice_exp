(function() {

    var Class = rootRequire('utils/jhClass');

    module.exports = Class.create({
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
    });

}());