const shuffle = (array) => {
  let copy = [...array];
  const newArray = [];
  while (copy.length > 0) {
    const index = Math.floor(Math.random() * copy.length);
    newArray.push(copy[index]);
    copy[index] = copy[copy.length - 1];
    copy.pop();
  }
  return newArray;
};

module.exports = shuffle;
