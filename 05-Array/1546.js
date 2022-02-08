// input : ['3', '40 80 60']
// output : 75.0 (score / maxScore * 100)

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const scoreArr = input[1].split(' ').map(x => Number(x));  

let max = 0;
let sum = 0;


let T = Number(input[0])

for(let i=0;i<T;i++) {    // 최대값 구하기
   if(scoreArr[i] > max) {
      max = scoreArr[i];    
   }
}

let changedScore = scoreArr.map(score => score / max * 100);  

for(let j=0; j<T ;j++) {    // 합 구하기
   sum += changedScore[j];
}

console.log(sum / T);     // avg = sum / length
