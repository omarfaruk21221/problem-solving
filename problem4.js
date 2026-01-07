function maxValue(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("problem 4 output", maxValue([1, 32, 45, 67, 98, 76]));
