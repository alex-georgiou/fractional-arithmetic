/**
 * fractional-arithmetic.js is a javascript library for doing fractional arithmetic
 * Author: Alexandros Georgiou <alex.georgiou@gmail.com>
 * 
 */

var isInteger = function(i) {
	return !isNaN( i ) && ( parseInt( i ) == parseFloat( i ) );
};

module.exports.isInteger = isInteger;

var gcd = function( a, b) {
    a = Math.abs( a );
    b = Math.abs( b );
    var temp;
    while ( b > 0 ) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

module.exports.gcd = gcd;

var lcm = function( a, b ) {
    a = Math.abs( a );
    b = Math.abs( b );
    return a * ( b / gcd( a, b ) );
};
module.exports.lcm = lcm;

function NotAFractionError(message) {
    this.name = 'NotAFractionError';
    this.message = message || 'Not a Fraction';
}

NotAFractionError.prototype = new Error();
NotAFractionError.prototype.constructor = NotAFractionError;

function Fraction( n, d ) {
	
	if ( typeof(n) === 'undefined' )
		throw new NotAFractionError( 'You must specify a fraction' );
	
	// create without new keyword
	if ( ! ( this instanceof Fraction ) ) {
		return new Fraction( n, d );
	}
	
	// create from fraction
	if ( n instanceof Fraction && typeof(d) === 'undefined' ) {
		this.n = n.n;
		this.d = n.d;
		return;
	}
	
	//create from integers
	if ( isInteger(n) && isInteger(d)) {
		this.n = parseInt(n);
		this.d = parseInt(d);
		return;
	}
	
	//create from one integer
	if ( isInteger(n) && typeof(d) === 'undefined') {
		this.n = parseInt(n);
		this.d = 1;
		return;
	}
	
	
	if ( typeof(n) === 'number' ) {
		var ns = '' + n;
		var decimals = ns.length - ns.indexOf( '.' ) - 1;
		this.n = parseInt( ns.replace( '.', '' ) );
		this.d = Math.pow( 10, decimals );
		return;
	}
	
	throw new NotAFractionError(
		'Cannot instantiate Fraction(' + n + ( typeof(d) === 'undefined' ? '' : d ) + ')'
	);
}

Fraction.prototype.toString = Fraction.prototype.toS = Fraction.prototype.inspect = function() {
	return '(' + this.n + '/' + this.d + ')';
};

Fraction.prototype.toNumber = function () {
	return this.n / this.d;
};

Fraction.prototype.toLatex = function() {
	return '\\frac{' + this.n + '}{' + this.d + '}';
};

Fraction.prototype.toMathML = function() {
	return '<mfrac><mn>' + this.n + '</mn><mn>' + this.d + '</mfrac>';
};

Fraction.prototype.simplify = function() {
    if ( this.d < 0 ) {
        this.n *= -1;
        this.d *= -1;
    }
	var g = gcd( this.n, this.d );
	return g == 1 ? this : new Fraction( this.n / g, this.d / g);
};

Fraction.prototype.inverse = function() {
	return new Fraction( this.d, this.n );
};

Fraction.prototype.times = Fraction.prototype.multiply = function( n, d ) {
	
	if ( n instanceof Fraction && typeof(d) === 'undefined' ) {
		return new Fraction( this.n * n.n, this.d * n.d ).simplify();
	} else if ( isInteger(n) && isInteger(d) ) {
		return this.times( new Fraction( n, d ) );
	}
	throw new NotAFractionError('Cannot multiply ' + this + ' with n=' + n + ', d=' + d );
};

Fraction.prototype.dividedBy = Fraction.prototype.div = function( n, d ) {
	
	if ( n instanceof Fraction && typeof(d) === 'undefined' ) {
		return n.inverse().times( this );
	} else if ( isInteger(n) && isInteger(d) ) {
		return this.times( new Fraction( d, n ) );
	}
	throw new NotAFractionError('Cannot divide '+this+' by n='+n+', d='+d);
};

Fraction.prototype.plus = function( n, d ) {
	
	if ( n instanceof Fraction && typeof(d) === 'undefined') {
		var l = lcm( this.d, n.d );
		return new Fraction( this.n * l / this.d + n.n * l / n.d, l );
	} else if ( isInteger(n) && isInteger(d) ) {
		return this.plus( new Fraction(n,d) );
	}
	throw new NotAFractionError( 'Cannot add ' + this + ' to n=' + n + ', d=' + d );
};

Fraction.prototype.minus = function( n, d ) {
	
	if ( n instanceof Fraction && typeof(d) === 'undefined' ) {
		var l = lcm(this.d,n.d);
		return new Fraction( this.n * l / this.d - n.n * l / n.d, l);
	} else if (isInteger(n) && isInteger(d)) {
		return this.minus( new Fraction(n,d) );
	}
	throw new NotAFractionError( 'Cannot add ' + this + ' to n=' + n + ', d=' + d);
};

module.exports.Fraction = Fraction;
