const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
describe("function contains", () => {
  test("returns true if the object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("returns true if the object contains the properties", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("returns false if the object contains non-existent properties", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("throws an error when an array is passed", () => {
    expect(() => contains([], "a")).toThrow("Argument must be an object");
  });
});
