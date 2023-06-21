let reverseString = require("./reverseString");

describe("reverseString", () => {
  test("reversing the string: hello", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("reverseString", () => {
  test("reversing the string: OpenAI", () => {
    expect(reverseString("OpenAI")).toBe("IAnepO");
  });
});

describe("reverseString", () => {
  test("reversing the string: racecar", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
});
