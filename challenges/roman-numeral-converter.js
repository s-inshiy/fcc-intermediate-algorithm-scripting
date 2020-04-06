// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// convertToRoman(68) should return "LXVIII".
// convertToRoman(649) should return "DCXLIX".
// convertToRoman(1023) should return "MXXIII"

const createRoman = (number, letter1, letter2, letter3) => {
  if (number < 4) {
    return letter1.repeat(number);
  } else if (number === 4) {
    return letter1 + letter2;
  } else if (number === 5) {
    return letter2;
  } else if (number > 5 && number < 9) {
    return letter2 + letter1.repeat(number - 5);
  } else {
    return letter1 + letter3;
  }
};

const checkLengthAndCreateRoman = string => {
  const number = +string[0];
  switch (string.length) {
    case 3:
      return createRoman(number, "C", "D", "M");
    case 2:
      return createRoman(number, "X", "L", "C");
    case 1:
      return createRoman(number, "I", "V", "X");
    default:
      return "M".repeat(number);
  }
};

const convertToRoman = number => {
  const numbers = `${number}`.split("").reverse();
  const romanNumbers = [];

  for (let i = 0; numbers.length > i; i++) {
    romanNumbers.unshift(
      checkLengthAndCreateRoman(numbers[i] + `0`.repeat(i))
    );
  }

  return romanNumbers.join("");
};

console.log(convertToRoman(123));
