// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

const whatIsInAName = (collection, source) => {
  const arr = [];
  collection.forEach(obj => {
    const objKeys = Object.keys(obj);
    const sourceKeys = Object.keys(source);
    if (
      sourceKeys.every(key => objKeys.includes(key) && obj[key] === source[key])
    ) {
      arr.push(obj);
    }
  });
  return arr;
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
