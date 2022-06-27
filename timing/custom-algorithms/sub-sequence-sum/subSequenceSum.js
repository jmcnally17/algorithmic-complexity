const subSequenceSum = (array, target) => {
  if (target === 0) return true;
  let sum = 0;
  sum += array[0];
  if (sum === target) return true;
  return false;
};

module.exports = subSequenceSum;
