const singleFibTimer = (input, callback, num) => {
  let cumulative = 0;
  for (let i = 0; i < num; i++) {
    const startTime = performance.now();
    callback(input);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / num;
};

module.exports = singleFibTimer;
