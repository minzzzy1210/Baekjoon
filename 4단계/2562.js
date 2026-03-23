const nums = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let maxNum = nums[0];
let maxNumIdx = 0;
for (let idx = 1; idx < nums.length; idx++) {
  const num = nums[idx];

  if (num > maxNum) {
    maxNum = num;
    maxNumIdx = idx;
  }
}

console.log(`${maxNum}\n${maxNumIdx + 1}`);
