const subSequenceSum = (array, target) => {
  if (target === 0) return true;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    if (sum === target) return true;
    for (let a = i + 1; a < array.length; a++) {
      sum += array[a];
      if (sum === target) return true;
    }
  }
  return false;
};

module.exports = subSequenceSum;
