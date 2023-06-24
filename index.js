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

export function caesarCipher(inputString = undefined, key = 1) {
  if (typeof inputString !== "string") {
    return undefined;
  }
  let moduloKey = Math.abs(key % 26);
  const keyIsNegative = key < 0 ? true : false;
  let result = "";
  for (const char of inputString) {
    let shiftSteps = moduloKey;
    let charCode = char.charCodeAt(0);
    let shiftedChar = char;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      while (shiftSteps > 0) {
        shiftSteps--;
        charCode = keyIsNegative ? charCode - 1 : charCode + 1;
        if (charCode === 123) {
          charCode = 97;
        } else if (charCode === 96) {
          charCode = 122;
        } else if (charCode === 91) {
          charCode = 65;
        } else if (charCode === 64) {
          charCode = 90;
        }
      }
      shiftedChar = String.fromCharCode(charCode);
    }
    result += shiftedChar;
    //console.log({ char, charCode, shiftedChar, result });
  }
  return result;
}

export function analyzeArray(array) {
  const length = array.length;
  const average = array.reduce((acc, item) => acc + item) / length;
  const min = array.reduce((acc, item) => (acc > item ? item : acc));
  const max = array.reduce((acc, item) => (acc < item ? item : acc));
  return {
    average,
    min,
    max,
    length,
  };
}
