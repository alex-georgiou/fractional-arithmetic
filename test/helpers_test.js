exports.isInteger_tests = function( test ) {
	var isInteger = require( '../fractional-arithmetic.js' ).isInteger;

	test.expect( 5 );

	test.ok( isInteger( 1 ), 'one' );
	test.ok( isInteger( 654321 ), '654321' );
	test.ok( isInteger( '1' ), 'string 1' );
	test.ok( !isInteger( NaN ), 'NaN' );
	test.ok( !isInteger( 1.5 ), '1.5' );

	test.done();
};

exports.gcd_tests = function( test ) {
	var gcd = require( '../fractional-arithmetic.js' ).gcd;

    test.expect( 4 );

    test.equal( gcd( 0, 0 ), 0, 'gcd of 0 and 0' );
    test.equal( gcd( 0, 1 ), 1, 'gcd of 0 and 1' );
    test.equal( gcd( 24, 54 ), gcd( 24, 54 ), 'gcd is commutative' );
    test.equal( gcd( 54, 24 ), 6, 'gcd of 54 and 24 is 6' );

    test.done();
};

exports.lcm_tests = function( test ) {
	var lcm = require( '../fractional-arithmetic.js' ).lcm;

    test.expect( 4 );

    test.ok( isNaN( lcm( 0, 0 ) ), 'lcm of 0 and 0' );
    test.equal( lcm( 0, 1 ), 0, 'lcm of 0 and 1' );
    test.equal( lcm( 4, 6 ), lcm( 6, 4 ), 'lcm is commutative' );
    test.equal( lcm( 4, 6 ), 12, 'lcm of 4 and 6 is 12' );

    test.done();
};