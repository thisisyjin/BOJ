// another solution (get average)

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const scoreArr = input[1].split(' ').map(x=>Number(x));

let max = 0;
let sum = 0;
let T = Number(input[0]);

for (let i=0; i<T; i++) {
  if (scoreArr[i] > max) {
    max = scoreArr[i];
  }
}

let changedScore = scoreArr.forEach(score => {
  score = score / max * 100;
  sum += score;
});

console.log(sum / T);
