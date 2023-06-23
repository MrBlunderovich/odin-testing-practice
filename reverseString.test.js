const { reverseString } = require("./index.js");

test("Basic string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Empty value", () => {
  expect(reverseString()).toBe();
});

test("Number", () => {
  expect(reverseString(123)).toBe(123);
});
