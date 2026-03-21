const cases = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (cases) => {
  const result = [];
  for (let i = 0; i < cases.length; i++) {
    const [a, b] = cases[i].split(' ').map(Number);

    result.push(a + b);
  }

  return result.join('\n');
};

console.log(solution(cases));
