const createLookup = require("./lookup.js");

describe("createLookup function", () => {
  test("creates a country-currency lookup object", () => {
    const countryCurrencyPair = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const expectedResult = {
      US: "USD",
      CA: "CAD",
    };
    expect(createLookup(countryCurrencyPair)).toEqual(expectedResult);
  });
  test("creates a look up for country-currency pair", () => {
    const countryCurrencyPair = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["RSA", "ZAR"],
      ["UK", "GBP"],
    ];
    const expectedResult = {
      US: "USD",
      CA: "CAD",
      RSA: "ZAR",
      UK: "GBP",
    };
    expect(createLookup(countryCurrencyPair)).toEqual(expectedResult);
  });
});

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
