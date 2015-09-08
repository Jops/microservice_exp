global.rootRequire = function( name ) {
    return require( __dirname + '/../main/' + name );
};

var Dictionary = rootRequire('utils/dictionary');

describe('Dictionary', function() {

    var dictionary,
        item1 = {
            name: 'item1'
        },
        item2 = {
            name: 'item2'
        },
        item3 = {
            name: 'item3'
        };

    function addThreeItems() {
        dictionary.add( 'key1', item1 );
        dictionary.add( 'key2', item2 );
        dictionary.add( 'key3', item3 );
    }

    beforeEach( function() {
        dictionary = new Dictionary();
    } );

    it( 'should start empty', function() {
        dictionary.length().should.be.exactly(0);
    } );

    it( 'can add new items', function() {
        dictionary.add( 'key', item1 );
        dictionary.has( 'key' ).should.be.true;
    } );

    it( 'can return an item', function() {
        dictionary.add( 'key', item3 );
        dictionary.at( 'key' ).should.have.property('name', 'item3');
    } );

    it( 'can remove an item', function() {
        dictionary.add( 'key', item1 );
        dictionary.remove( 'key' );
        dictionary.has( 'key' ).should.be.false;
    } );

    it( 'can iterate over all items', function() {
        addThreeItems();
        // each item name should have the same last character as the key
        dictionary.iterate( function(k,v){
            v.name[v.name.length-1].should.be.exactly(k[k.length-1]);
        } );
    } );

    it( 'can tell the length of the dictionary', function() {
        addThreeItems();
        dictionary.length().should.be.exactly(3);
    } );

    it( 'can be emptied', function() {
        addThreeItems();
        dictionary.clear();
        dictionary.length().should.be.exactly(0);
    } );

});