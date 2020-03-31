// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

const diffArray = (arr1, arr2) =>
  arr1
    .filter(element => !arr2.includes(element))
    .concat(arr2.filter(element => !arr1.includes(element)));

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
