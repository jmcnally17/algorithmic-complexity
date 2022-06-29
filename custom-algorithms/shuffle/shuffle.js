const shuffle = (array, callback = Math.random()) => {
  const newArray = new Array(array.length);
  for (let i = 0; i < newArray.length; i++) {
    const index = Math.floor(callback * array.length);
    newArray[i] = array[index];
    array.splice(index, 1);
  }
  return newArray;
};

module.exports = shuffle;
