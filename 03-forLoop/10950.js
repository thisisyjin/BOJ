// input : Case \n Num1 Num2  \n Num3 Num4 ...
// output: Num1+Num2 \n Num3+Num4 ...


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

T = Number(input[0]);

for(let i=1;i<=T;i++) {
   let numArr = input[i].split(' ').map(x=>Number(x));
   let [num1, num2] = numArr;
   console.log(num1 + num2);
}
