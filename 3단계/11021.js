const [t, ...cases] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (t, cases) => {
  const result = [];

  for (let i = 0; i < t; i++) {
    const [a, b] = cases[i].split(' ').map(Number);

    result.push(`Case #${i + 1}: ${a + b}`);
  }

  return result.join('\n');
};

console.log(solution(+t, cases));
