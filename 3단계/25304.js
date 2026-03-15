const [x, _n, ...infos] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (x, infos) => {
  let calcedPrice = 0;
  for (const info of infos) {
    const [price, cnt] = info.split(' ').map(Number);

    calcedPrice += price * cnt;
  }

  return +x === calcedPrice ? 'Yes' : 'No';
};

console.log(solution(x, infos));
