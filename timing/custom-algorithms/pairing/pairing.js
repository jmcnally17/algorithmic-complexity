const pairing = (array) => {
  let pairing = [];
  if (array.length > 1) {
    pairing.push([array[0], array[1]]);
  }
  if (array.length === 1) pairing.push([array[0]]);
  return pairing;
};

module.exports = pairing;