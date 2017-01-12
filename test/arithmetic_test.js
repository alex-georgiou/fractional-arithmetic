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
	test.expect( 5 );

	var f = Fraction( 2, 3 );
	var g = Fraction( 4, 5 );

	test.deepEqual( f.times( g ), Fraction( 8, 15 ), 'multiply fractions' );
	test.deepEqual( f.times( 4, 5 ), Fraction( 8, 15 ), 'multiply fraction with integers' );
	test.deepEqual( f.times( g ), g.times( f ), 'multiply commutative' );
	test.deepEqual( f.times( 3, 2 ), Fraction( 1, 1 ), 'multiply and simplify' );
	test.throws( function() {
		f.times( 'foo' );
	}, 'NotAFractionError', 'Must multiply by a fraction' );

	test.done();
};

exports.fraction_dividedBy_tests = function( test ) {
	test.expect( 3 );

	var f = Fraction( 2, 3 );
	var g = Fraction( 5, 7 );
	test.deepEqual( f.dividedBy( g ), Fraction( 14, 15 ), 'division of fractions' );
	test.notDeepEqual( f.dividedBy( g ), g.dividedBy( f ), 'division not commutative' );
	test.throws( function() {
		f.dividedBy( 'bar' );
	}, 'NotAFractionError', 'Must divide by a fraction' );

	test.done();
};

exports.fraction_plus_tests = function( test ) {
	test.expect( 3 );

	var f = Fraction( 2, 3 );
	var g = Fraction( 5, 7 );
	test.deepEqual( f.plus( g ), Fraction( 29, 21 ), 'addition of fractions' );
	test.deepEqual( f.plus( g ), g.plus( f ), 'addition is commutative' );
	test.throws( function() {
		f.plus( 'baz' );
	}, 'NotAFractionError', 'Must add to a fraction' );

	test.done();
};

exports.fraction_minus_tests = function( test ) {
	test.expect( 3 );

	var f = Fraction( 2, 3 );
	var g = Fraction( 5, 7 );
	test.deepEqual( f.minus( g ), Fraction( -1, 21 ), 'subtraction of fractions' );
	test.notDeepEqual( f.minus( g ), g.minus( f ), 'subtraction is not commutative' );
	test.throws( function() {
		f.minus( 'xyz' );
	}, 'NotAFractionError', 'Must subtract by a fraction' );


	test.done();
};
