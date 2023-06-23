const { calculator } = require("./index.js");

test("Addition", () => {
  expect(calculator.add(11, 4)).toBe(15);
});

test("Subtraction", () => {
  expect(calculator.subtract(88, 13)).toBe(75);
});

test("Division", () => {
  expect(calculator.divide(54, 2)).toBe(27);
});

test("Multiplication", () => {
  expect(calculator.multiply(11, 4)).toBe(44);
});

test("Missing input", () => {
  expect(calculator.multiply(11)).toBe(undefined);
});

test("Invalid input", () => {
  expect(calculator.multiply(11, "4")).toBe(undefined);
});
