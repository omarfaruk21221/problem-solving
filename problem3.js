function isPalindrome(str) {
  let resversed = str.split("").reverse().join("");
  return str === resversed;
}
// console.log("problem 3 output ;", isPalindrome("madam"));
// console.log("problem 3 output ;", isPalindrome("hello"));
console.log("problem 3 output ;", isPalindrome("anina"));
