const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const num1 = input[0];
const num2 = input[1];

const result = [];
result.push(num1 + num2);
result.push(num1 - num2);
result.push(num1 * num2);
result.push(parseInt(num1 / num2));
result.push(num1 % num2);

console.log(result.join('\n'));
