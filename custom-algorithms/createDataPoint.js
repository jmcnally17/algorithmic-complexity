const createDataPoint = (input, callback, num, target) => {
  let cumulative = 0;
  for (let i = 0; i < num; i++) {
    const startTime = performance.now();
    callback(input, target);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / num;
};

module.exports = createDataPoint;
