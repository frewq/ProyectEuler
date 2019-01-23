// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?

let a = [bigInt(2).pow(1000)].toString();
let b = [];


function suma(total, sum) {
  return total + sum;
}

for (let i = 0; i < a.length; i++) {
  b.push(parseInt(a.slice(i, i + 1)));
}
console.log(b.reduce(suma))