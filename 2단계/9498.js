const num = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const getGrade = (num) => {
  if (num >= 90) return 'A';
  else if (num >= 80) return 'B';
  else if (num >= 70) return 'C';
  else if (num >= 60) return 'D';
  else return 'F';
};

console.log(getGrade(num));
