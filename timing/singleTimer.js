const singleTimer = (array, callback) => {
  let cumulative = 0;
  for (let i = 0; i < 10; i++) {
    let startTime = performance.now();
    callback(array);
    let endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / 10;
};

module.exports = singleTimer;
