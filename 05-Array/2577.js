// input: A,B,C (100~1000)
// output : 0 1 2 3 4 5 6 7 8 9 (count - A * B * C)

// ex> 150, 266, 427 (17,037,300 = result: 3 1 0 2 0 0 0 2 0 0) 



const input = require('fs').readFileSync('/dev/stdin').toSting().split('\n');
const num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9 ; i++) {
  let count = 0;
  for (let j = 0 ; j <= num.length; j++) {
    if(Number(num[j]) === i) {
      count++;
    }
  }
  console.log(count);
}
