const singleTimer = (array, callback) => {
  let startTime = performance.now();
  callback(array);
  let endTime = performance.now();
  return endTime - startTime;
};

module.exports = singleTimer;
