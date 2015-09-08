(function() {

    var Class = rootRequire('utils/jhClass'),
        Dictionary = rootRequire('utils/dictionary');

    module.exports = Class.create({

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
    });

}());