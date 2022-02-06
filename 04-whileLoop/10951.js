// A+B
// input : ['1 1', '2 3', '3 4', '9 8', '5 2']
// output : 2 5 7 17 7

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;
let ans ='';

while(i < input.length - 1) {
   const nums = input[i].split(' ').map(x => Number(x));
   ans += nums[0] + nums[1] + '\n'
   i += 1;
}

console.log(ans);
