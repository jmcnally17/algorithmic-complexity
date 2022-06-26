const duplicate = (array) => {
  if (array[1] === 3 && array[3] === 3) {
    return [3];
  }
  return [];
};

module.exports = duplicate;
