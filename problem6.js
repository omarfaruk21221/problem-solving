function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log("problem 6 output", sumOfArray([1, 7, 3, 4]));
