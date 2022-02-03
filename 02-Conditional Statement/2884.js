// Date 계산 - 45분 전으로


// 방법 1. new Date 이용
// 시간만 계산하면 되므로 현재시각 불러오고, setHours와 setMinutes 해준 후, 45분 빼기 연산.

const input = require('fs').readFileSync('dev/stdin').toString().split(' ').map(x=>Number(x));

const [H,M] = input; 

const now = new Date();
now.setHours(H);
now.setMinutes(M);

now.setMinutes(now.getMinutes()-45);
console.log(now.getHours(), now.getMinutes());



// 방법 2. if - else문

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x));

const [H,M] = input;

if(M < 45){
   H -= 1;
   M += 15;

   if(H === -1) {          // 0시 - 1시간 = 23시가 되도록
      H = 23;
   }
   
} else {
   M -= 45;
}

console.log(`${H} ${M}`);
