const reverseString = require("./stringFunctions");
describe("reversing inputed string", () => {
  test("reversing string: Adefela", () => {
    expect(reverseString.reverseString("Adefela")).toBe("alefedA");
  });
});

const isPalindrome = require("./stringFunctions");
describe("check if string is palindrome", () => {
  test("checking if string (racecar) is a palindrome", () => {
    expect(isPalindrome.isPalindrome("racecar")).toBe(true);
  });
});

describe("check if input is not a alphanumeric value", () => {
  test("checking if string (#####) is not a alphanumeric value", () => {
    expect(isPalindrome.isPalindrome("#####")).toBe(
      "Input needs to an alphanumerical string brother..."
    );
  });
});
