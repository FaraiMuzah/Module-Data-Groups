// Predict and explain first... 
We will get an error due to the loop using the for...of synax.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
for...of synax works for objects that are iterable like arrays and strings.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of object.values(author)) {
  console.log(value);
}
