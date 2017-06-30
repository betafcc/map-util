const deep    = {};
const shallow = {};


shallow.value = ({empty, iter, set}) => f => m => {
  let acc = empty();

  for (const [k, v] of iter(m))
    if (f(v))
      acc = set(acc, k, v);

  return acc;
};


deep.value = ({empty, iter, set, is}) => f => m => {
  let acc = empty();

  for (const [k, v] of iter(m)) {
    if (f(v)) { 
      if (is(v))
        acc = set(acc, k, deep.value({empty, iter, set, is})(f)(v));
      else
        acc = set(acc, k, v);
    }
  }

  return acc;
};


module.exports = {deep, shallow};
