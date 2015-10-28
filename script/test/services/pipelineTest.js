global.rootRequire = function( name ) {
    return require( __dirname + '/../main/' + name );
};

var Pipeline = rootRequire('services/pipeline');

describe('Dictionary', function() {

    var pipeline;

    beforeEach( function() {
        pipeline = new Pipeline();
    } );

    it( 'should start empty', function() {
    } );

});