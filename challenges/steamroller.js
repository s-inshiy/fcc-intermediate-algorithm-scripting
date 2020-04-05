// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

const steamrollArray = arr => {
  for (let i = 0; arr.length > i; i++) {
    while (Array.isArray(arr[i])) {
      arr.splice(arr.indexOf(arr[i]), 1, ...arr[i]);
    }
  }
  return arr;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
