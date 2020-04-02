// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("stvwx") should return "u".

const fearNotLetter = str => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const sourceSegment = str.split("");
  const alphabetSegment = alphabet.slice(alphabet.indexOf(sourceSegment[0]));
  return alphabetSegment.filter(letter => !sourceSegment.includes(letter))[0];
};

console.log(fearNotLetter("stvwx"));
