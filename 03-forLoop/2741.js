// input : 5
// output :  1 2 3 4 5 (1~N print)


const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = '';

for(let i=1;i<=input;i++) {
   result += i + "\n";
}

console.log(result);
