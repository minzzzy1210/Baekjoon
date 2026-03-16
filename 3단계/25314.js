const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  const longCnt = n / 4;
  const longArr = Array(longCnt).fill('long');

  longArr.push('int');

  return longArr.join(' ');
};

console.log(solution(n));
