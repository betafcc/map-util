// empty: to
// set  : to
// is   : from
// iter : from
const deep = ({empty, set, is, iter}) => m => {
  let acc = empty();

  for (const [k, v] of iter(m)) { 
    if (is(v))
      acc = set(acc, k, deep ( { empty, set, is, iter } ) ( v ) );
    else
      acc = set(acc, k, v);
  }

  return acc;
};


const shallow = ({empty, set, iter}) => m => {
  let acc = empty();

  for (const [k, v] of iter(m))
      acc = set(acc, k, v);

  return acc;
};


module.exports = { deep, shallow };
