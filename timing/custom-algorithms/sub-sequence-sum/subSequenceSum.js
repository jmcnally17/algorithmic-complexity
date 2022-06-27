const subSequenceSum = (array, target) => {
  if (target === 0) return true;
  if (array[0] === target || array[1] === target || array[2] === target)
    return true;
  if (array[0] + array[1] === target) return true;
  if (array[1] + array[2] === target) return true;
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  if (sum === target) return true;
  return false;
};

module.exports = subSequenceSum;
