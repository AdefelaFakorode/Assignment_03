const longestSubstring = require("./longestSubstring");
describe("Longest Substring Without Repeating Characters", () => {
  test('should return 3, longest substring without repeating characters is "abc"', () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
  });
});

describe("Longest Substring Without Repeating Characters", () => {
  test('should return 1, longest substring without repeating characters is "b"', () => {
    expect(longestSubstring("bbbbb")).toBe(1);
  });
});

describe("Longest Substring Without Repeating Characters", () => {
  test('should return 3, longest substring without repeating characters is "abc"', () => {
    expect(longestSubstring("pwwkew")).toBe(3);
  });
});
