const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = +input[1];

const solution = (a, b, c) => {
  const plusMinutes = b + c;
  if (plusMinutes < 60) {
    return `${a} ${plusMinutes}`;
  }

  const plusHour = a + Math.trunc(plusMinutes / 60);
  const calculatedHour = plusHour % 24;
  const calculatedMinutes = plusMinutes % 60;

  return `${calculatedHour} ${calculatedMinutes}`;
};

console.log(solution(a, b, c));
