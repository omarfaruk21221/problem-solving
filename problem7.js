function findEvenNumbers(arr) {
  let evenNumbers = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

console.log("problem 7 output", findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
