const EvenNubers = (evenNumbers) => {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};

const evenNumbers = EvenNubers([1, 5, 7, 4, 2]);
console.log(evenNumbers);
