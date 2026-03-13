const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = +input[1];

const solution = (a, b, c) => {
  const addMinutes = b + c;

  if (addMinutes < 60) {
    return `${a} ${b + c}`;
  }

  const realMinutes = addMinutes % 60;
  const plusHour = a + Math.trunc(addMinutes / 60);
  const realHour = plusHour % 24;

  return `${realHour} ${realMinutes}`;
};

console.log(solution(a, b, c));
