const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const starCnt = i;
    const emptyCnt = n - i;

    result.push(`${' '.repeat(emptyCnt)}${'*'.repeat(starCnt)}`);
  }

  return result.join('\n');
};

console.log(solution(n));
