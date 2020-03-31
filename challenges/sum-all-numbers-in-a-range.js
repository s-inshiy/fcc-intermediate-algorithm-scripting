// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// sumAll([1, 4]) should return a number.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

const sumAll = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (max * (max + 1) - (min - 1) * min) / 2;
};

console.log(sumAll([1, 4]));
