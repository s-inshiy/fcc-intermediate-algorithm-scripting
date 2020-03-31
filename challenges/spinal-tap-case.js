// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

const spinalCase = str =>
  str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

console.log(spinalCase("This Is Spinal Tap"));
