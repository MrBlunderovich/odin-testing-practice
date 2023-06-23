export function capitalize(input) {
  if (!input || typeof input !== "string") {
    return input;
  }
  return input[0].toUpperCase() + input.slice(1);
}
