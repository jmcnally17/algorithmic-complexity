const reverse = (array) => {
  const a = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = a;
  return array;
};

module.exports = reverse;
