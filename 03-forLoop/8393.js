// input : 3
// ouput : 6 (1+2+3)

const input = require('fs').readFileSync('/dev/stdin');

const n = Number(input);
let sum = 0;


for(let i=1;i<=n;i++){
   sum += i
}
console.log(sum);
