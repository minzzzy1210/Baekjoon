const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const compare = (a, b) => {
  if (a > b) return '>';
  else if (a < b) return '<';
  else return '==';
};

console.log(compare(A, B));
