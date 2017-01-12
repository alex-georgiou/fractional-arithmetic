var Fraction = require( '../fractional-arithmetic.js' ).Fraction;
var NotAFractionError = require( '../fractional-arithmetic.js' ).NotAFractionError;

exports.fraction_create_tests = function( test ) {
	test.expect( 2 );

	var f = new Fraction( 5, 2 );
	test.equal( f.n, 5, 'numerator from integers' );
	test.equal( f.d, 2, 'denominator from integers' );

	test.done();
};

exports.fraction_create_fraction_tests = function( test ) {
	test.expect( 2 );

	var f = new Fraction( 6, 2 );
	var g = new Fraction( f );
	test.equal( g.n, 6, 'numerator from fraction' );
	test.equal( g.d, 2, 'denominator from fraction' );

	test.done();
};

exports.fraction_create_integer_tests = function( test ) {
	test.expect( 2 );

	var f = new Fraction( 6 );
	test.equal( f.n, 6, 'numerator from integer' );
	test.equal( f.d, 1, 'denominator from integer'  );

	test.done();
};

exports.fraction_create_without_new_tests = function( test ) {
	test.expect( 4 );

	var f = Fraction( 6 );
	test.equal( f.n, 6, 'numerator from integer without new' );
	test.equal( f.d, 1, 'denominator from integer without new'  );

	var g = Fraction( 6, 2 );
	test.equal( g.n, 6, 'numerator from integers without new' );
	test.equal( g.d, 2, 'denominator from integers without new' );

	test.done();
};

exports.fraction_create_decimal_tests = function( test ) {
	test.expect( 2 );

	var f = new Fraction( 3.14 );
	test.equal( f.n, 314, 'numerator from decimal' );
	test.equal( f.d, 100, 'denominator from decimal' );

	test.done();
};

exports.fraction_create_error_tests = function( test ) {
	test.expect( 2 );

	test.throws( function() {
		var f = new Fraction( 'foobar' );
	}, NotAFractionError, 'Cannot construct from string' );

	test.throws( function() {
		var g = new Fraction( );
	}, NotAFractionError, 'Cannot construct from nothing' );

	test.done();
};

