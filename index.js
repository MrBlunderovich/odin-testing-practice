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
