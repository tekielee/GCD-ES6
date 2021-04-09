function gcd(a, b) {
	if(b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

let a = 10;
let b = 15;
console.log(gcd(a, b));