// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156

const sumPrimes = num => {
  const arr = [];
  let nextNumber = num;

  while (nextNumber >= 2) {
    arr.push(nextNumber);
    nextNumber--;
  }

  const oddNumbers = arr.filter((element) => element % 2 !== 0);

  for (let i = 0; oddNumbers.length > i; i++) {
    oddNumbers.forEach((number) => {
      if (oddNumbers[i] !== number) {
        if ((number / oddNumbers[i]) % 1 === 0) {
          oddNumbers.splice(oddNumbers.indexOf(number), 1);
          i--;
          return number;
        }
      }
    });
  }

  return oddNumbers.reduce((acc, curr) => acc + curr) + 2;
};

console.log(sumPrimes(10));
