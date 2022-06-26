const fibonacci = (N) => {
  let list = [];
  for (let i = 0; i < N; i++) {
    if (i === 0) list.push(0);
    if (i === 1) list.push(1);
    if (i > 1) list.push(list[list.length - 2] + list[list.length - 1]);
  }
  return list;
};

module.exports = fibonacci;
