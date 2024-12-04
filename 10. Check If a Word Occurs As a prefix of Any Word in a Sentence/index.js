/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    console.log(words[i].indexOf(searchWord));
    if (words[i].indexOf(searchWord) !== -1) {
      if (words[i].substring(0, searchWord.length) === searchWord) {
        return i + 1;
      }
    }
  }
  return -1;
};
