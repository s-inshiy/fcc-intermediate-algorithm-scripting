// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.

const addTogether = (...args) => {
  if (args.every((num) => typeof num === "number")) {
    if (args.length > 1) {
      return args.reduce((acc, curr) => acc + curr);
    } else if (args.length === 1) {
      return function (num) {
        if (typeof num === "number") {
          return args[0] + num;
        } else {
          return undefined;
        }
      };
    }
  } else {
    return undefined;
  }
};

console.log(addTogether(2)(3));
