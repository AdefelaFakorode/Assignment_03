function reverseString(word) {
  let reverse = "";
  if (typeof word !== "string" || /[^a-zA-Z0-9]/.test(word)) {
    // checking if input is a string and is doesn't contain any characters that are not alphanumeric
    return "Input needs to an alphanumerical string brother...";
  } else {
    for (let i = word.length - 1; i >= 0; i--) {
      reverse += word[i];
    }
    return reverse;
  }
}

module.exports = reverseString;
