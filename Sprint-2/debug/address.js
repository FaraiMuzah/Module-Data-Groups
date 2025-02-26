// Predict and explain first...
The code will run to output "My house number is undefined". This is because address[0] is trying to access a property using an index which an array does,
but this is an object which is only accesible by keys.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
