const { capitalize } = require("./index.js");

test("Capitalize basic string", () => {
  expect(capitalize("string")).toBe("String");
});
test("Capitalize uppercase string", () => {
  expect(capitalize("STRING")).toBe("STRING");
});
test("Capitalize undefined", () => {
  expect(capitalize()).toBe();
});
test("Capitalize empty string", () => {
  expect(capitalize("")).toBe("");
});
test("Capitalize number", () => {
  expect(capitalize("1")).toBe("1");
});
test("Capitalize array", () => {
  expect(capitalize(["a"])).toBe(["a"]);
});
