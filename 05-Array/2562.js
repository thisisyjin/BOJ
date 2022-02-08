// Find max value + index
// input : 9 numbers (separator: \n)
// output : max \n max-index

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));
let max = input[0];
let index = 0;

for(let i=1; i<9; i++) {
  if(input[i] > max) {
    max = input[i];
    index = i;
  }
}

console.log(max);
console.log(index);
