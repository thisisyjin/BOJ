// 123
// 456
//x---
// ⓐ
// ⓑ
// ⓒ
// ---
// ⓓ


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [A,B] = input;

const one = B % 10;
const ten = Math.floor((B % 100) / 10);
const hundred = Math.floor(B / 100);

console.log(A * one);
console.log(A * ten);
console.log(A * hundred);
console.log(A * B);
