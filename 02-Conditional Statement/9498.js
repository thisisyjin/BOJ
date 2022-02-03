// 90~100 : A, 80~89: B, 70~79:C, 60~69: D, 나머지:F

const input = Number(require('fs').readFileSync('/dev/stdin').toString());

if(input < 60) {
   console.log("F");
} else if(input < 70) {
   console.log("D");
} else if(input < 80) {
   console.log("C");
} else if(input < 90) {
   console.log("B");
} else {
   console.log("A")
}
