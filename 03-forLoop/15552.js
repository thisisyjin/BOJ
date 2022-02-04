// input: 5 \n 1 1 \n 12 34 \n 5 500 ...
// output: 2 46 505 ... (a+b)

// Timeout Error : https://www.acmicpc.net/blog/view/55


let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")

let answer = ''

for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
}

console.log(answer)
