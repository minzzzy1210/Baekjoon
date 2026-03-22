const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);

const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

console.log(`${minNum} ${maxNum}`);
