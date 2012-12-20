# fractional-arithmetic.js #

A javascript library for doing fractional arithmetic.

## Install

First do an `npm install fractional-arithmetic`.

Then, load the library into your code: `var Fraction = require('fractional-arithmetic').Fraction;`.
You're good to go.

## Example usage

	var f = new Fraction(7,24);
	var g = Fraction(11,30);
	console.log('f:',f,'g:',g);
	console.log('multiplied:',f.times(g));
	console.log('added:',f.plus(g));
	console.log('divided:',f.dividedBy(g));
	console.log('latex f:',f.toLatex());
	console.log('number f:',f.toNumber());


## API

### C'tors
`Fraction(n,d)` creates the fraction "`n` over `d`" (`n` and `d` must be integers) 
	
`Fraction(f)` creates a new fraction equal to fraction f
	
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
	
`Fraction.gcd(a,b)` computes the Greatest Common Divisor of `a` and `b`
	
`Fraction.lcm(a,b)` computes the Least Common Multiple of `a` and `b`

### Exceptions

If an invalid fraction is specified, a `NotAFractionError` is thrown. For example, `Fraction(1.5,3)` will throw an error because the library only supports integer numerators and denominators.

## Feedback

Send me an email at <a href="mailto:alex.georgiou@gmail.com">alex.georgiou@gmail.com</a>.
