// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.

const sumFibs = num => {
  let fibNumbers = [1, 1];
  let nextFibNumber = 0;

  while (nextFibNumber <= num) {
    nextFibNumber =
      fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
    fibNumbers.push(nextFibNumber);
  }

  const sumOddFibNumbers = fibNumbers
    .filter((number) => number % 2 && number <= num)
    .reduce((acc, curr) => acc + curr);

  return sumOddFibNumbers;
};

console.log(sumFibs(75025));
