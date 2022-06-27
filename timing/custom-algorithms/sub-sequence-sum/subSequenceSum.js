const subSequenceSum = (array, target) => {
  if (target === 0) return true;
  if (array[0] === target || array[1] === target) return true;
  if (array[0] + array[1] === target) return true;
  return false;
};

module.exports = subSequenceSum;
