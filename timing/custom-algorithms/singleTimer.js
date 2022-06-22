const singleTimer = (array, callback) => {
  let cumulative = 0;
  for (let i = 0; i < 1000000; i++) {
    let startTime = performance.now();
    callback(array);
    let endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / 1000000;
};

module.exports = singleTimer;
