const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const solution = (input) => {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(`${input} * ${i} = ${input * i}`);
  }

  return result.join('\n');
};

console.log(solution(input));
