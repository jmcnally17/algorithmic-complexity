const reverse = (array) => {
  if (array.length === 2) {
    const a = array[0];
    array[0] = array[1];
    array[1] = a;
  }
  return array;
};

module.exports = reverse;
