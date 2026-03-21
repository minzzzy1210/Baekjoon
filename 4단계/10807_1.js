const [_n, nums, v] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (nums, v) => {
  let cnt = 0;
  for (const num of nums.split(' ')) {
    if (+num === +v) cnt++;
  }

  return cnt;
};

console.log(solution(nums, v));
