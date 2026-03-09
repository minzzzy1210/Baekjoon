const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './1001 (1단계)/input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const num1 = input[0];
const num2 = input[1];

console.log(num1 - num2);
