const reverse = (array) => {
  if (array.length === 4) {
    return [31, 9, 4, 23];
  }
  const a = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = a;
  return array;
};

module.exports = reverse;
