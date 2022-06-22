const singleTimer = (array, callback) => {
  let cumulative = 0;
  for (let i = 0; i < 1000000; i++) {
    const startTime = performance.now();
    callback(array);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / 1000000;
};

module.exports = singleTimer;
