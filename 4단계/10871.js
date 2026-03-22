const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [_n, x] = input[0].split(' ').map(Number);
  const nums = input[1].split(' ').map(Number);

  return nums.filter((num) => num < x).join(' ');
};

console.log(solution(input));
