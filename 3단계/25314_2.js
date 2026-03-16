const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  const longCnt = n / 4;

  let result = '';
  for (let i = 0; i < longCnt; i++) {
    result += 'long ';
  }

  result += 'int';

  return result;
};

console.log(solution(n));
