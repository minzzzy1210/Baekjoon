const [info, ...turns] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = info.split(' ').map(Number);

const result = new Array(n).fill(0);
for (const turn of turns) {
  const [i, j, k] = turn.split(' ').map(Number);

  for (let idx = i - 1; idx < j; idx++) {
    result[idx] = k;
  }
}

console.log(result.join(' '));
