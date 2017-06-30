const {expect} = require('chai');
const _ = require('lodash');
const jsc = require('jsverify');

const is = require('@betafcc/is');
const {deep, shallow} = require('../../src/mixins/convert.js');


const id = x => x;

const isMapShapedArray = arr =>
  is.not.array(arr)  ? false :
  arr.every(el =>
    is.array(el) &&
    (el.length === 2) &&
    is.string(el[0])
  );

const conf_objToArr = {
  empty: () => [],
  set  : (o, k, v) => (o.push([k, v]), o),
  iter : Object.entries,
  is   : is.plainObject,
};

const conf_arrToObj = {
  iter : id,
  is   : isMapShapedArray,
  empty: () => {return {};},
  set  : (o, k, v) => (o[k] = v, o),
};

const conf_objToMap = {
    iter : Object.entries,
    is   : is.plainObject,
    empty: () => new Map(),
    set  : (o, k, v) => o.set(k, v),

};

const conf_mapToObj = {
    empty: () => {return {};},
    set  : (o, k, v) => (o[k] = v, o),
    iter : id,
    is   : is.map,
};


const objToArr = deep(conf_objToArr);
const arrToObj = deep(conf_arrToObj);
const objToMap = deep(conf_objToMap);
const mapToObj = deep(conf_mapToObj);

const object_examples = [
  {}, {'': undefined}, {'': {}}, {['']: {}},
  {a: 1}, {a: {aa: 1}}, {a: {aa: 1, ab: 2}, b: 3},
  {a: [1, 2]}, {'': 1},
];
// Empty array is common with normal-array, cant make perfect inverse
//   {a: []},


describe('Converter Mixin', () => {

  describe('Object to Array then Array to Object', () => {
    it('Should Be Inverse for cases without empty array', () => {
      for (const obj of object_examples) {
        const arr = objToArr(obj);
        const objBack = arrToObj(arr);

        expect(obj).to.deep.equal(objBack);
      }
    });
  });

  describe('Object to Map then Map to Object', () => {
    it('Should Be Inverse for examples', () => {
      for (const obj of object_examples) {
        const map = objToMap(obj);
        const objBack = mapToObj(map);

        expect(obj).to.deep.equal(objBack);
      }
    });

    jsc.property('Should Be Inverse for jsv examples', 'dict', (a) => {
      return _.isEqual(a, mapToObj(objToMap(a)))
    })
  });

});

