var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  const lengthOfLastWord = words[words.length - 1];
  console.log(lengthOfLastWord.length);
};

lengthOfLastWord("Hello World");
