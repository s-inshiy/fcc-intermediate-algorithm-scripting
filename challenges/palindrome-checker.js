// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Return true if the given string is a palindrome. Otherwise, return false.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.

const palindrome = str => {
  const match = str
    .match(/[a-zA-Z0-9]/gi)
    .map((letter) => letter.toLowerCase());

  return match.join("") === match.reverse().join("") ? true : false;
};

console.log(palindrome("A man, a plan, a canal. Panama"));
