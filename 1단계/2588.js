const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [b1, b2, b3] = B.toString().split('').map(Number);

const result = [A * b3, A * b2, A * b1, A * B];
console.log(result.join('\n'));
