const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B] = input;

const result = [A + B, A - B, A * B, Math.trunc(A / B), A % B];
console.log(result.join('\n'));

// Math.trunc → 소수점을 그냥 잘라냄
// Math.floor → 반내림
