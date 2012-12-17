/**
 * fractional-arithmetic.js is a javascript library for doing fractional arithmetic
 * Author: Alexandros Georgiou <alex.georgiou@gmail.com>
 * 
 */

function isInteger(i) {
	return !isNaN(i) && ( parseInt(i) == parseFloat(i));
} 

Fraction.gcd = function(a, b) {
	var temp;
    while (b > 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

Fraction.lcm = function(a, b) {
    return a * (b / Fraction.gcd(a, b));
};


function NotAFractionError(message) {
    this.name = "NotAFractionError";
    this.message = message || "Not a Fraction";
}

NotAFractionError.prototype = new Error();
NotAFractionError.prototype.constructor = NotAFractionError;
 

function Fraction(n,d) {
	
	//create without new keyword
	if ( !(this instanceof Fraction) ) {
		return new Fraction(n,d);
	}
	
	//create from fraction
	if (n instanceof Fraction && typeof d == 'undefined') {
		this.n = n.n;
		this.d = n.d;
		
		return;
	}
	
	//create from integers
	if (isInteger(n) && isInteger(d)) {
		this.n = parseInt(n);
		this.d = parseInt(d);
		
		return;
	}
	
	//create from one integer
	if (isInteger(n) && typeof d == 'undefined') {
		this.n = parseInt(n);
		this.d = 1;
		
		return;
	}
	
	throw new NotAFractionError('Cannot instantiate fraction with n='+n+', d='+d);
}

Fraction.prototype.toString = Fraction.prototype.toS = Fraction.prototype.inspect = function() {
	return '('+this.n+'/'+this.d+')';
};

Fraction.prototype.toNumber = function () {
	return this.n / this.d;
};

Fraction.prototype.toLatex = function() {
	return '\\frac{'+this.n+'}{'+this.d+'}';
};

Fraction.prototype.toMathML = function() {
	return '<mfrac><mn>'+this.n+'</mn><mn>'+this.d+'</mfrac>';
};

Fraction.prototype.simplify = function() {
	var gcd = Fraction.gcd(this.n, this.d);
	return gcd == 1 ? this : new Fraction(this.n / gcd, this.d / gcd); 
};

Fraction.prototype.inverse = function() {
	return new Fraction(this.d,this.n);
};

Fraction.prototype.times = Fraction.prototype.multiply = function(n,d) {
	
	if (n instanceof Fraction && typeof d == 'undefined')
		return new Fraction(this.n*n.n,this.d*n.d).simplify();
	
	else if (isInteger(n) && isInteger(d)) {
		return this.times(new Fraction(n,d));
	}

	throw new NotAFractionError('Cannot multiply '+this+' with n='+n+', d='+d);
};

Fraction.prototype.dividedBy = Fraction.prototype.div = function(n,d) {
	
	if (n instanceof Fraction && typeof d == 'undefined')
		return n.inverse().times(this);
	
	else if (isInteger(n) && isInteger(d)) {
		return this.times( new Fraction(d,n) );
	}
	
	throw new NotAFractionError('Cannot divide '+this+' by n='+n+', d='+d);
};

Fraction.prototype.plus = function(n,d) {
	
	if (n instanceof Fraction && typeof d == 'undefined') {
		var lcm = Fraction.lcm(this.d,n.d);
		return new Fraction( this.n * lcm / this.d + n.n * lcm / n.d, lcm);
	}
	
	else if (isInteger(n) && isInteger(d)) {
		return this.plus( new Fraction(n,d) );
	}
	
	throw new NotAFractionError('Cannot add '+this+' to n='+n+', d='+d);
	
};

Fraction.prototype.minus = function(n,d) {
	
	if (n instanceof Fraction && typeof d == 'undefined') {
		var lcm = Fraction.lcm(this.d,n.d);
		return new Fraction( this.n * lcm / this.d - n.n * lcm / n.d, lcm);
	}
	
	else if (isInteger(n) && isInteger(d)) {
		return this.minus( new Fraction(n,d) );
	}
	
	throw new NotAFractionError('Cannot add '+this+' to n='+n+', d='+d);
	
};

exports.Fraction = Fraction;