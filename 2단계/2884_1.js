const [h, m] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const totalMinutes = h === 0 && m < 45 ? 24 * 60 + m : 60 * h + m;
const settingTotalMinutes = totalMinutes - 45;

const settingHour = Math.trunc(settingTotalMinutes / 60);
const settingMinutes = settingTotalMinutes % 60;

console.log([settingHour, settingMinutes].join(' '));
