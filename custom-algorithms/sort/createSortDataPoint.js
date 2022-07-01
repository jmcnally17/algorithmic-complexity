const createDataPoint = (input, callback, numberOfMeasurements) => {
  let cumulative = 0;
  for (let i = 0; i < numberOfMeasurements; i++) {
    const startTime = performance.now();
    callback(input);
    const endTime = performance.now();
    cumulative += endTime - startTime;
  }
  return cumulative / numberOfMeasurements;
};

module.exports = createDataPoint;
