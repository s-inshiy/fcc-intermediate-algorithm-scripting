// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay.
// translatePigLatin("glove") should return "oveglay".

const consonantClusters = [
  "bl",
  "br",
  "ch",
  "ck",
  "cl",
  "cr",
  "dr",
  "fl",
  "fr",
  "gh",
  "gl",
  "gr",
  "ng",
  "ph",
  "pl",
  "pr",
  "qu",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "st",
  "sw",
  "th",
  "tr",
  "tw",
  "wh",
  "wr",
  "nth",
  "schw",
  "scr",
  "shr",
  "spl",
  "spr",
  "squ",
  "word",
  "thr"
];

const translatePigLatin = word => {
  const firstLetter = word[0];
  const ay = "ay";

  if (/[aeiou]/.test(firstLetter)) {
    return word + "way";
  } else if (!/[aeiou]/.test(word)) {
    return word + ay;
  } else {
    const searchClusters = consonantClusters
      .filter(element => word.indexOf(element) === 0)
      .sort((a, b) => b.length - a.length);

    if (searchClusters.length) {
      const cluster = searchClusters[0];
      return word.slice(cluster.length) + cluster + ay;
    } else {
      return word.slice(1) + firstLetter + ay;
    }
  }
};

console.log(translatePigLatin("california"));
