
export function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

export function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}