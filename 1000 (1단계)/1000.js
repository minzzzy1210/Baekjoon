const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sum = input.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0);

console.log(sum);
