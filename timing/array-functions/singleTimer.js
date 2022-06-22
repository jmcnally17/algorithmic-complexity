const singleTimer = (array, numFunc) => {
  let cumulative = 0;

  for (let i = 0; i < 1000000; i++) {
    if (numFunc === 1) {
      let startTime = performance.now();
      array.reverse();
      let endTime = performance.now();
      cumulative += endTime - startTime;
    }
  }
  return cumulative / 1000000;
};

module.exports = singleTimer;
