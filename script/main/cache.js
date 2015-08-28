(function() {

    var path = require('path'),
        Dictionary = require('./dictionary');

    var Cache = {

        dCACHE: null,

        constructor: function()
        {
            this.dCACHE = new Dictionary();
        },

        get: function( id )
        {
            if( this.dCACHE.at( id ) )
            {
            }
        }
    };

    var Class = Cache.constructor;
    Class.prototype = Cache;
    module.exports = Class;

}());