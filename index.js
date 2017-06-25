const {isPlainObject, isMap} = require('./types.js');


const objMap = func => obj =>
  Object
    .entries(obj)
    .reduce((acc, [k, v]) =>
      (acc[k] = func(v), acc)
    , {});


const mapMap = func => map =>
  Array.from(map.entries())
    .reduce((acc, [k, v]) =>
      (acc.set(k, func(v)), acc)
    , new Map());


const deepObjMap = func => obj =>
  Object
    .entries(obj)
    .reduce((acc, [k, v]) =>
      isPlainObject(v)
      ? (acc[k] = deepObjMap(func)(v), acc)
      : (acc[k] = func(v), acc)
    , {});


const deepMapMap = func => map =>
  Array.from(map.entries())
    .reduce((acc, [k, v]) =>
      isMap(v)
      ? (acc.set(k, deepMapMap(func)(v)), acc)
      : (acc.set(k, func(v)), acc)
    , new Map());


const objToMap = obj =>
  new Map(Object.entries(obj));


const deepObjToMap = obj =>
  Object
    .entries(obj)
    .reduce((acc, [k, v]) =>
      isPlainObject(v)
      ? (acc.set(k, deepObjToMap(v)), acc)
      : (acc.set(k, v), acc)
    , new Map());


const mapToObj = map =>
  Array.from(map.entries())
    .reduce((acc, [k, v]) =>
      (acc[k] = v, acc)
    , {});


const deepMapToObj = map =>
  Array.from(map.entries())
    .reduce((acc, [k, v]) =>
      isMap(v)
      ? (acc[k] = deepMapToObj(v), acc)
      : (acc[k] = v, acc)
    , {});


module.exports = {
  objMap,
  mapMap,
  deepObjMap,
  deepMapMap,
  objToMap,
  mapToObj,
  deepObjToMap,
  deepMapToObj,
};
