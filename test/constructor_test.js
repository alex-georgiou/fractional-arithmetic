var Fraction = require( '../fractional-arithmetic.js' ).Fraction;

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

exports.fraction_to_formats_tests = function( test ) {
	test.expect( 6 );
	var f = new Fraction( 7, 3 );
	test.equal( f.toString(), '(7/3)', 'toString' );
	test.equal( f.toS(), '(7/3)', 'toS' );
	test.equal( f.inspect(), '(7/3)', 'inspect' );
	test.equal( f.toNumber(), 7/3, 'toNumber' );
	test.equal( f.toLatex(), '\\frac{7}{3}', 'toLatex' );
	test.equal( f.toMathML(), '<mfrac><mn>7</mn><mn>3</mfrac>', 'toMathML' );
	test.done();
};
