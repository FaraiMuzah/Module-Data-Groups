function contains(obj, key) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Argument must be an object");
  }
  return key in obj;
}
module.exports = contains;
