const [h, m] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let hour = h;
let minutes = m - 45;

if (minutes < 0) {
  hour = hour - 1; // 9
  minutes = 60 + minutes;
}

if (hour < 0) {
  hour = 24 + hour;
}

console.log(`${hour} ${minutes}`);
