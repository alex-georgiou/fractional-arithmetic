var Fraction = require( '../fractional-arithmetic.js' ).Fraction;

exports.fraction_to_formats_tests = function( test ) {
	test.expect( 6 );

	var f = Fraction( 7, 3 );
	test.equal( f.toString(), '(7/3)', 'toString' );
	test.equal( f.toS(), '(7/3)', 'toS' );
	test.equal( f.inspect(), '(7/3)', 'inspect' );
	test.equal( f.toNumber(), 7/3, 'toNumber' );
	test.equal( f.toLatex(), '\\frac{7}{3}', 'toLatex' );
	test.equal( f.toMathML(), '<mfrac><mn>7</mn><mn>3</mfrac>', 'toMathML' );

	test.done();
};

exports.fraction_simpify_tests = function( test ) {
	test.expect( 6 );

	var f = Fraction( 7, 3 ).simplify();
	test.equal( f.n, 7, 'numerator when not simplifiable' );
	test.equal( f.d, 3, 'denominator when not simplifiable' );

	var g = Fraction( 100, 25 ).simplify();
	test.equal( g.n, 4, 'numerator when simplifiable' );
	test.equal( g.d, 1, 'denominator when simplifiable' );

	var h = Fraction( 4, 8 ).simplify();
	test.equal( h.n, 1, 'numerator when simplifiable' );
	test.equal( h.d, 2, 'denominator when simplifiable' );

	test.done();
};
