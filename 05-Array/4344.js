// score Average - percent 

/* input : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91` */
// output : 40.000% 57.143% 33.333% 66.667% 55.556% 


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let cases = input[i].split(' ');
  let scoreCount = Number(cases[0]);
  let sum = 0;      // 케이스마다 카운트 초기화

  for (let j = 1; j <= scoreCount; j++) {
    sum += Number(cases[j]);
  }
  
  let avg = sum / scoreCount;

  let student = 0;
  for (let k = 1; k <= scoreCount; k++) {
    if (cases[k] > avg) {
      student++;
    }
  }
  
  result = (student / scoreCount * 100).toFixed(3);   // 소수점 세자리 고정
  console.log(result + '%');
}
