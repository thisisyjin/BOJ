// 2741.js (reverse)
// input : 5
// output : 5 4 3 2 1

const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = '';

for(let i = input; i>=1 ;i--) {
   result += i + "\n";
}

console.log(result);
