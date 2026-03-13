const [a, b, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const solution = (a, b, c) => {
  if (a === b && b === c) {
    return 10000 + a * 1000;
  }

  if (a === b || a === c) {
    return 1000 + a * 100;
  }

  if (b === c) {
    return 1000 + b * 100;
  }

  const max = Math.max(a, b, c);
  return max * 100;
};

console.log(solution(a, b, c));
