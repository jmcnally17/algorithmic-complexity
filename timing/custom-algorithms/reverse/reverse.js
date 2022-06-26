const reverse = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const a = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = a;
  }
  return array;
};

module.exports = reverse;
