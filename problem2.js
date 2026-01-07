function countVewel(str) {
  let count = 0;
  let vewels = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vewels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("problem 2 output ;", countVewel("apple"));
