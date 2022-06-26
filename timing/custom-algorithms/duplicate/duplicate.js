const duplicate = (array) => {
  let repeats = [];
  let counts = {};
  array.forEach((element) => {
    if (counts[element] === undefined) {
      counts[element] = 1;
    } else {
      counts[element]++;
    }
    console.log(counts);
  });
  for (const [key, value] of Object.entries(counts)) {
    if (value > 1) repeats.push(key);
  }
  return repeats;
};

module.exports = duplicate;
