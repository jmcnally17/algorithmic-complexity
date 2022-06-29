const duplicate = (array) => {
  let repeats = [];
  let counts = {};
  addToCounts(array, counts);
  addToRepeats(counts, repeats);
  return repeats;
};

const addToCounts = (array, counts) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (counts[element] === undefined) {
      counts[element] = 1;
    } else {
      counts[element]++;
    }
  }
};

const addToRepeats = (counts, repeats) => {
  for (const key in counts) {
    if (counts[key] > 1) repeats.push(key);
  }
};

module.exports = duplicate;
