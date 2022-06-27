const subSequenceSum = (array, target) => {
  if (target === 0) return true;
  this.isTrue = false;
  iterateEachIndex(array, target);
  return this.isTrue;
};

const iterateEachIndex = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    if (sum === target) this.isTrue = true;
    addElementsAndCheck(array, target, i, sum);
  }
};

const addElementsAndCheck = (array, target, i, sum) => {
  for (let a = i + 1; a < array.length; a++) {
    sum += array[a];
    if (sum === target) this.isTrue = true;
  }
};

module.exports = subSequenceSum;
