const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);

let minNum = nums[0];
let maxNum = nums[0];
for (let i = 1; i < +input[0]; i++) {
  const num = nums[i];

  if (num < minNum) {
    minNum = num;
    continue;
  }

  if (num > maxNum) {
    maxNum = num;
  }
}

console.log(`${minNum} ${maxNum}`);
