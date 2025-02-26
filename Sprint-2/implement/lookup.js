function createLookup(countryCurrencyPair) {
  const lookup = {};
  countryCurrencyPair.forEach(([country, currency]) => {
    lookup[country] = currency;
  });
  return lookup;
}

module.exports = createLookup;
