const is = require('@betafcc/is');


const id = x => x;


const isMapShapedArray = arr =>
  is.not.array(arr)  ? false :
  arr.every(el =>
    is.array(el) &&
    (el.length === 2) &&
    is.string(el[0])
  );


module.exports = {
  array  : {
    empty: () => [],
    iter : id,
    set  : (o, k, v) => (o.push([k, v]), o),
    is   : isMapShapedArray
  },
  object : {
    empty: () => {return {};},
    iter : Object.entries,
    set  : (o, k, v) => (o[k] = v, o),
    is   : is.plainObject
  },
  map    : {
    empty: () => new Map(),
    iter : id,
    set  : (o, k, v) => o.set(k, v),
    is   : is.map
  }
};
