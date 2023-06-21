function longestSubstring(word) {
  let counter = 0;
  let seen = {};
  let start = 0;
  let words = word.split(""); //breaking word into letters...

  for (let i = 0; i < words.length; i++) {
    let letter = words[i];
    if (seen[letter] !== undefined && seen[letter] >= start) {
      start = seen[letter] + 1;
    }
    seen[letter] = i;
    if (i - start + 1 > counter) {
      counter = i - start + 1;
    }
  }

  return counter;
}
module.exports = longestSubstring;
