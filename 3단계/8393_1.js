const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

console.log(solution(n));
