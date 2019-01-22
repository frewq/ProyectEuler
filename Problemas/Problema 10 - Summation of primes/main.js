// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

let suma = 2;
let esprimo = 2000000;

//<script src="https://peterolson.github.io/BigInteger.js/BigInteger.min.js"></script
//tiene errores
//bigInt(4033).isPrime() y bigInt(4681).isPrime() dan error, deben ser falsos, no son primos son divisibles por 37 y 31

// for (let i = 3; i < esprimo; i++) {
//   if (i == 4033) {
//     console.log('stop');
//   }
//   if (i % 2 !== 0) {
//     if (bigInt(i).isPrime()) {
//       suma = '' + BigInt(bigInt(suma).add(i));
//     }
//   }
// }
// console.log('suma: ', suma);

function euler10(max) {
  let prime = 1;
  let number = 0;
  do {
    prime += 1;

    const isPrime = num => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num !== 1 && num !== 0;
    };

    number += isPrime(prime) ? prime : 0;
  } while (prime < max);

  return number;
}

console.log('Euler:', euler10(esprimo));
