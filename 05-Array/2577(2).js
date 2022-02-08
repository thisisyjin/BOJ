// another route 
// count 대신 i를 더해서 length 구하기 

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = String(input[0] * input[1] * input[2]);

let answer = '';

for (let i = 0; i <= 9; i++) {
  let numArr = "";
  for (let j = 0; j < nums.length; j++) {
    let strNum = Number(strNumbers[j]);
    if (i === strNum) {
      numArr += `${i}`;      // 변수 i를 string처럼 더하기 연산함
    }
  }

  answer += numArr.length + "\n";    
}

console.log(answer);
