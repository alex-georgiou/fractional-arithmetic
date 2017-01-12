# fractional-arithmetic.js #

A javascript library for doing fractional arithmetic.

## Install

First do an `npm install fractional-arithmetic`.

Then, load the library into your code: `var Fraction = require('fractional-arithmetic').Fraction;`.
You're good to go.

## Example usage

	var f = new Fraction( 7, 24 );
	var g = Fraction( 11, 30 );
	console.log( 'f=', f, 'g=', g );
	console.log( 'f + g = ', f.plus(g) );
	console.log( 'f - g = ', f.minus(g) );
	console.log( 'f x g = ', f.times(g) );
	console.log( 'f / g = ', f.dividedBy(g) );
	console.log( 'latex f:', f.toLatex() );
	console.log( 'number f:', f.toNumber() );

	var pi= Fraction( 3.1415926 );
	console.log( 'from decimal pi:', pi, pi.simplify() );


## API

### C'tors
`Fraction(n,d)` creates the fraction "`n` over `d`" (`n` and `d` must be integers) 
	
`Fraction(f)` if f is fraction, creates a new fraction equal to fraction f

`Fraction(d)` if f is decimal number, creates a new fraction equal to decimal number d
	
### Arithmetic methods (can be chained)

`.add(f)`, `.plus(f)` both add fraction `f` to this fraction
	
`.add(n,d)`, `.plus(n,d)` both add "`n` over `d`" to this fraction (`n` and `d` must be integers)

`.minus(f)` subtracts fraction `f` from this fraction
	
`.minus(n,d)` subtracts "`n` over `d`" from this fraction (`n` and `d` must be integers)

`.times(f)`, `.multiply(f)` both multiply this fraction with fraction `f`

`.times(n,d)`, `.multiply(n,d)` both multiply this fraction with fraction "`n` over `d`" (`n` and `d` must be integers)

`.dividedBy(f)`, `.div(f)` both divide this fraction with fraction `f`
	
`.dividedBy(n,d)`, `.div(n,d)` both divide this fraction with fraction "`n` over `d`" (`n` and `d` must be integers)
	
`.inverse()` returns the inverse of this fraction (flips numerator & denominator)
	
### Conversion methods

`.toString()`, `toS()`, `inspect()` return a human-readable string of this fraction
	
`.toLatex()` returns the fraction as a LaTeX command string
	
`.toMathML()` returns the fraction as a MathML string
	
`.toNumber()` returns the fraction as a decimal number (divides numerator by denominator)
	
### Helpers

If you need to use these you can import them separately, like so:

    var gcd = require('fractional-arithmetic').gcd;

`gcd(a,b)` computes the Greatest Common Divisor of `a` and `b`
	
`lcm(a,b)` computes the Least Common Multiple of `a` and `b`

`isInteger(n)` true iff `n` is an integer

### Exceptions

If an invalid fraction is specified, a `NotAFractionError` is thrown. For example, `Fraction('foobar')` will throw an error.

## Grunt targets

These targets are available

### Run jshint and nodeunit tests

	grunt test

### Build the minified version

	grunt build

### Run tests and build the minified version

	grunt

## Feedback

Send me an email at [alex.georgiou@gmail.com](mailto:alex.georgiou@gmail.com).
