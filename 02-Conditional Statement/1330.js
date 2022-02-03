const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x));

const [A, B] = input;

if(A > B) {
   console.log(">");
} else if(A < B) {
   console.log("<");
} else {
   console.log("==");
}
