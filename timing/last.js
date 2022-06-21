const last = (array) => {
  if (array.length === 0) return null;
  if (array.length === 1) return array[0];
  if (array.length === 2) return array[1];
};

module.exports = last;
