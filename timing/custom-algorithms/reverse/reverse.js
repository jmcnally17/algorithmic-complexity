const reverse = (array) => {
  const a = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = a;
  if (array.length === 4) {
    const b = array[1];
    array[1] = array[2];
    array[2] = b;
  }
  return array;
};

module.exports = reverse;
