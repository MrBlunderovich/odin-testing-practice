const { caesarCipher } = require("./index.js");

test("Basic", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Uppercase", () => {
  expect(caesarCipher("Abc", 1)).toBe("Bcd");
});

test("Punctuated", () => {
  expect(caesarCipher("[a,b!c/}", 1)).toBe("[b,c!d/}");
});

test("Wrapped", () => {
  expect(caesarCipher("yZz", 1)).toBe("zAa");
});

test("Missing input", () => {
  expect(caesarCipher()).toBe(undefined);
});

test("Missing key", () => {
  expect(caesarCipher("abc")).toBe("bcd");
});

test("Key of 0", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("Big key", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
});
