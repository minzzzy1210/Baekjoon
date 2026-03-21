const [_n, nums, v] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (nums, v) => {
  return nums.split(' ').filter((num) => +num === +v).length;
};

console.log(solution(nums, v));
