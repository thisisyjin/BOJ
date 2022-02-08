// input : ['5', '20 10 35 30 7']
// output : 7 35  (min max)

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);
const nums = input[1].split(' ').map(x => Number(x));

let max = nums[0];
let min = nums[0];

// 첫번째 값을 max, min으로 설정한 후, 두번째~마지막 요소 비교해나감.

for(i=1;i<T;i++){
   if(nums[i] > max) {
      max = nums[i];
   } 
   if(nums[i] < min) {
      min = nums[i];
   }
}
console.log(`${min} ${max}`);



