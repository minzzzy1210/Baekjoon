const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  const longCnt = n / 4;

  const result = [];
  for (let i = 0; i < longCnt; i++) {
    result.push('long');
  }

  result.push('int');

  return result.join(' ');
};

console.log(solution(n));
