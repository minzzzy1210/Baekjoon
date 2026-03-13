const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (n) => {
  const cnt = Math.trunc(n / 2);
  const isOdd = n % 2 !== 0;

  let result = (1 + n) * cnt;

  if (isOdd) result += cnt + 1;

  return result;
};

console.log(solution(n));
