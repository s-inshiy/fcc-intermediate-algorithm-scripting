// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog

// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".

const myReplace = (str, before, after) => {
  const arr = str.split(" ");

  for (let i = 0; arr.length > i; i++) {
    if (arr[i] === before) {
      if (before[0] === before[0].toUpperCase()) {
        arr.splice(i, 1, after[0].toUpperCase() + after.slice(1));
      } else {
        arr.splice(i, 1, after);
      }
    }
  }

  return arr.join(" ");
};

console.log(myReplace("His name is Tom", "Tom", "john"));
