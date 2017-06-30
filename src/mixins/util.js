const negate = f => (...args) => !f(...args);


const keys_values = (iter) => (maps) => {
  const keys = [];
  const values = [];

  for (const obj of maps) {
    for (const [k, v] of iter(obj)) {
      keys.push(k);
      values.push(v);
    }
  }

  return [keys, values];
};



module.exports = {
  keys_values,
  negate,
};
