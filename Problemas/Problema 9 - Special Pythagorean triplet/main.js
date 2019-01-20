//https: projecteuler.net/problem=9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 5^2 = 9 + 16 = 25.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// 1000 - (c ^ 2) = a^2 + b^2;

let aa = 0;
let bb = 0;
let cc = 0;
let resultado = 0;

for (let c = 3; c < 1000; c++) {
  cc = Math.pow(c, 2);
  for (let a = 1; a <= 1000; a++) {
    aa = Math.pow(a, 2);
    for (let b = 2; b <= 1000; b++) {
      bb = Math.pow(b, 2);
      if (aa + bb == cc && a + b + c == 1000 && a < b && b < c) {
        resultado = a * b * c;
        console.log(
          `a: ${a} b: ${b} c: ${c}, a + b + c = ${a +
            b +
            c}, a * b * c = ${resultado}`
        );
      }
    }
  }
}
