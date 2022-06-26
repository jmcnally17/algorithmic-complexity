const singleTimer = (array, callback, num) => {
  let cumulative = 0;
  for (let i = 0; i < num; i++) {
    const startTime = performance.now();
    callback(array);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / num;
};

module.exports = singleTimer;
