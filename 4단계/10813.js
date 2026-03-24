const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, _m] = input[0].split(' ').map(Number);
const methods = input.slice(1);

const result = Array.from({ length: n + 1 }, (_, i) => i);
for (const method of methods) {
  const [i, j] = method.split(' ').map(Number);

  const keepI = result[i];
  result[i] = result[j];
  result[j] = keepI;
}

console.log(result.slice(1).join(' '));
