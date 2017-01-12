exports.gcd_tests = function(test) {
	var gcd = require( '../fractional-arithmetic.js' ).gcd;
	
    test.expect( 4 );
    test.equal( gcd( 0, 0 ), 0, 'gcd of 0 and 0' );
    test.equal( gcd( 0, 1 ), 1, 'gcd of 0 and 1' );
    test.equal( gcd( 24, 54 ), gcd( 24, 54 ), 'gcd is commutative' );
    test.equal( gcd( 54, 24 ), 6, 'gcd of 54 and 24 is 6' );
    test.done();
};