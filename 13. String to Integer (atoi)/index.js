/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // remove whitespace from beginning of string
  str = str.trim();

  // base case: empty string
  if (str.length === 0) {
    return 0;
  }

  // set sign to positive by default
  let sign = 1;

  // check if first character is a negative sign
  if (str[0] === "-") {
    sign = -1;
    // remove the negative sign from the string
    str = str.substring(1);
  }

  // check if first character is a positive sign
  if (str[0] === "+") {
    // remove the positive sign from the string
    str = str.substring(1);
  }

  // base case: first character is not a digit
  if (isNaN(str[0])) {
    return 0;
  }

  // initialize result as 0
  let result = 0;

  // iterate through string, converting each digit character to a number
  // and adding it to the result
  for (let i = 0; i < str.length; i++) {
    // base case: current character is not a digit
    if (isNaN(str[i])) {
      // stop iterating
      break;
    }
    // convert current digit character to number and add to result
    result = result * 10 + Number(str[i]);
  }

  // return final result, taking sign into account
  return sign * result;
};
