const { capitalize } = require("./index.js");

test("Basic string", () => {
  expect(capitalize("string")).toBe("String");
});
test("Uppercase string", () => {
  expect(capitalize("STRING")).toBe("STRING");
});
test("Single letter", () => {
  expect(capitalize("a")).toBe("A");
});
test("Undefined", () => {
  expect(capitalize()).toBe();
});
test("Empty string", () => {
  expect(capitalize("")).toBe("");
});
test("Number", () => {
  expect(capitalize(1)).toBe(1);
});
