const nums = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const result = [];
for (let i = 1; i <= 30; i++) {
  if (!nums.includes(i.toString())) {
    result.push(i);
  }
}

console.log(result.join('\n'));
