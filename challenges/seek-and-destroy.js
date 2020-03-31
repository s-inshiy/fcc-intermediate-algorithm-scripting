// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

const destroyer = (...arr) => {
  const initialArr = arr[0];
  const removeArr = [...arr.slice(1)];
  return initialArr.filter(element => !removeArr.includes(element));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
