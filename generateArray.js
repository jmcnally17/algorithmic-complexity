const generateArray = (length) => {
  return Array.from({ length: length }, () =>
    Math.floor(Math.random() * length)
  );
};

module.exports = generateArray;
