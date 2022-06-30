const createDataPoint = (input, callback, numberOfMeasurements, target) => {
  let cumulative = 0;
  for (let i = 0; i < numberOfMeasurements; i++) {
    const startTime = performance.now();
    callback(input, target);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / numberOfMeasurements;
};

module.exports = createDataPoint;
