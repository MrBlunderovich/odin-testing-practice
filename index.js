export function capitalize(input) {
  if (!input || typeof input !== "string") {
    return input;
  }
  return input[0].toUpperCase() + input.slice(1);
}

export function reverseString(input) {
  if (!input || typeof input !== "string") {
    return input;
  }
  let result = "";
  for (let character of input) {
    result = character.concat(result);
  }
  return result;
}

export const calculator = (function () {
  function validate(a, b) {
    for (let input of [a, b]) {
      if (typeof input !== "number") {
        return false;
      }
    }
    return true;
  }
  function add(a, b) {
    if (!validate(a, b)) {
      return undefined;
    }
    return a + b;
  }
  function subtract(a, b) {
    if (!validate(a, b)) {
      return undefined;
    }
    return a - b;
  }
  function divide(a, b) {
    if (!validate(a, b)) {
      return undefined;
    }
    return a / b;
  }
  function multiply(a, b) {
    if (!validate(a, b)) {
      return undefined;
    }
    return a * b;
  }
  return { add, subtract, divide, multiply };
})();
