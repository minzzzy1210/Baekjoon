const [t, ...pairs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (t, pairs) => {
  const result = [];
  for (let i = 0; i < t; i++) {
    const [a, b] = pairs[i].split(' ').map(Number);

    result.push(a + b);
  }

  return result.join('\n');
};

console.log(solution(+t, pairs));
