const fibonacci = (num) => {
  let list = [];
  if (num === 1) list.push(0);
  if (num === 2) list.push(0, 1);
  return list;
};

module.exports = fibonacci;
