var Fraction = require( '../fractional-arithmetic.js' ).Fraction;

exports.fraction_inverse_tests = function( test ) {
	test.expect( 3 );

	var f = Fraction( 2, 3 ).inverse();
	test.equal( f.n, 3, 'numerator of inverse' );
	test.equal( f.d, 2, 'denominator of inverse' );
	test.deepEqual( Fraction( 2, 3 ).inverse().inverse(), Fraction( 2, 3 ), 'double inverse' );
	test.done();
};

exports.fraction_times_tests = function( test ) {
	test.expect( 4 );
	
	var f = Fraction( 2, 3 );
	var g = Fraction( 4, 5 );
	
	test.deepEqual( f.times(g), Fraction( 8, 15 ), 'multiply fractions' );
	test.deepEqual( f.times(4,5), Fraction( 8, 15 ), 'multiply fraction with integers' );
	test.deepEqual( f.times(g), g.times(f), 'multiply commutative' );
	test.deepEqual( f.times(3,2), Fraction( 1, 1 ), 'multiply and simplify' );

	test.done();
};

exports.fraction_dividedBy_tests = function( test ) {
	test.expect( 0 );
	test.done();
};

exports.fraction_plus_tests = function( test ) {
	test.expect( 0 );
	test.done();
};

exports.fraction_minus_tests = function( test ) {
	test.expect( 0 );
	test.done();
};
