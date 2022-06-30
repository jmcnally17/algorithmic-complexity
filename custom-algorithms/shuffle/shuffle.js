const shuffle = (array) => {
  const newArray = new Array(array.length);
  for (let i = 0; i < newArray.length; i++) {
    const index = Math.floor(Math.random() * array.length);
    newArray[i] = array[index];
    array.splice(index, 1);
  }
  return newArray;
};

module.exports = shuffle;
