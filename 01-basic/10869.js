// input: 7 3
// output: 10 4 21 2 1 (+, -, *, /, %)


const input = require('fs').readFileSync("/dev/stdin").toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Number(A / B));      // 정수부분만 
console.log(A % B);
