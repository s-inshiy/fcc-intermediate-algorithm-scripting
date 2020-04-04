// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([23, 18]) should return 6056820.

const smallestCommons = arr => {
  const max = Math.max(...arr);
  const numbers = [];

  let min = Math.min(...arr);
  while (min <= max) {
    numbers.push(min);
    min++;
  }

  const greatestCommonDivisor = (a, b) =>
    a ? greatestCommonDivisor(b % a, a) : b;
  return numbers.reduce(
    (acc, curr) => (acc * curr) / greatestCommonDivisor(acc, curr)
  );
};

console.log(smallestCommons([23, 18]));
