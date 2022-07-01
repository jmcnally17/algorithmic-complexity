const shuffle = (array) => {
  const newArray = [];
  while (array.length > 0) {
    const index = Math.floor(Math.random() * array.length);
    newArray.push(array[index]);
    array[index] = array[array.length - 1];
    array.splice(array.length - 1, 1);
  }
  return newArray;
};

module.exports = shuffle;
