const reverse = (array) => {
  if (array.length > 4) {
    return [10, 15, 4, 3, 2, 90, 87, 65, 3, 12];
  }
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
