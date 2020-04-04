// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana
// convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
// convertHTML("<>") should return &lt;&gt;.

const replaceBy = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

const convertHTML = str =>
  str.replace(/&|<|>|"|\'/gi, symbol => replaceBy[symbol]);

console.log(convertHTML("Dolce & Gabbana"));
