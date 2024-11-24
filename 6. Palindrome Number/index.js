var isPalindrome = function (x) {
  let numStr = x.toString();
  let result = numStr.split("").reverse().join("");
  console.log(numStr, result);
  return numStr === result;
};

console.log(isPalindrome(121));
