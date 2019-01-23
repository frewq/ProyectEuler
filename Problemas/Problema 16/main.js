// console.log(bigInt(2).pow(1000));

let a = [bigInt(2).pow(1000)].toString();
let b = [];


function suma(total, sum) {
  return total + sum;
}

for (let i = 0; i < a.length; i++) {
  b.push(parseInt(a.slice(i, i + 1)));
}
console.log(b.reduce(suma))