// A+B
// if input[i] === '0 0' - end 

// input : ['1 1', '2 3', '3 4', '9 8', '5 2', '0 0']
// output : 2 5 7 17 7

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;
let ans = '';

while(input[i] != '0 0') {
   const nums = input[i].split(' ');
   ans += Number(nums[0]) + Number(nums[1]) + '\n';
   i += 1;
}
console.log(ans);
