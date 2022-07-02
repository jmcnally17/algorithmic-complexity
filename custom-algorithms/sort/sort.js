const sort = (array, l = 0, r = array.length - 1) => {
  if (l >= r) {
    return array;
  }
  let m = l + Math.floor((r - l) / 2);
  sort(array, l, m);
  sort(array, m + 1, r);
  merge(array, l, m, r);
  return array;
};

const merge = (array, l, m, r) => {
  let oneHalf = array.slice(l, m + 1);
  let twoHalf = array.slice(m + 1, r + 1);
  const steps = r - l + 1;
  for (let i = 0; i < steps; i++) {
    if (oneHalf[0] < twoHalf[0] || twoHalf[0] === undefined) {
      array[l + i] = oneHalf.splice(0, 1)[0];
    } else {
      array[l + i] = twoHalf.splice(0, 1)[0];
    }
  }
};

module.exports = sort;
