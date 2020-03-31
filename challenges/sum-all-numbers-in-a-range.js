// sumAll([1, 4]) should return a number.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (max * (max + 1) - (min - 1) * min) / 2;
}

sumAll([1, 4]);
