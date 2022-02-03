// (A+B)%C와 ((A%C) + (B%C))%C 
// (A×B)%C와 ((A%C) × (B%C))%C 가 일치하는지?

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x));

const [a,b,c] = input;   
// const a = input[0];
// const b = input[1];
// const c = input[2];


console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
