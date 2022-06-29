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
  for (const [key, value] of Object.entries(counts)) {
    if (value > 1) repeats.push(parseInt(key));
  }
};

module.exports = duplicate;
