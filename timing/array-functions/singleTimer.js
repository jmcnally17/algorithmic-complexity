const singleTimer = (array, numFunc) => {
  let cumulative = 0;

  for (let i = 0; i < 100; i++) {
    if (numFunc === 1) {
      const startTime = performance.now();
      array.reverse();
      const endTime = performance.now();
      cumulative += endTime - startTime;
    } else if (numFunc === 2) {
      const startTime = performance.now();
      array.sort((a, b) => a - b);
      const endTime = performance.now();
      cumulative += endTime - startTime;
    } else {
      throw "Incorrect number entered for second parameter";
    }
  }
  return cumulative / 100;
};

module.exports = singleTimer;
