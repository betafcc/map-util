const {expect} = require('chai');

deepObjectFromArray([ ['a', 2], ['b' , [ ['c', 4] ] ] ])
{ a: 2, b: { c: 4 } }

deepMapFromArray([ ['a', 2], ['b' , [ ['c', 4] ] ] ])
Map { 'a' => 2, 'b' => Map { 'c' => 4 } }

deepMapFromObject({a: 2, b: {c: 3, d: 4}})
Map { 'a' => 2, 'b' => Map { 'c' => 3, 'd' => 4 } }

> convert.objToMap({a: {b: {c: 2}}})
Map { 'a' => Map { 'b' => Map { 'c' => 2 } } }

const isDict = require('@betafcc/is').dict;
const objToMap = obj => deep({
  empty: () => new Map(),
  set  : (m, k, v) => m.set(k, v),
  is   : isDict,
  iter : Object.entries,
})(obj);

