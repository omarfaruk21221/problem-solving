function removeDup(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
  git;
}
console.log("problem 5 output", removeDup([1, 2, 2, 3, 4, 4]));
