const {expect} = require('chai');

const filter = require('../../src/presets/filter.js');


const dict = { a: 1, b: { ba: 2, bb: 3, bc: { bca: 4 } }, c: 5 };

const examples = [
  [
    filter(v => v % 2 === 0)({a: 1, b: {c: 5, d: 3}, d: 4}),
    { b: {}, d: 4 }
  ],
  [
    filter(v => v % 2 === 0)({a: 1, b: {c: 2, d: 3}, d: 4}),
    { b: { c: 2 }, d: 4 }
  ],
  [
    filter(v => v % 2 === 0)({a: 1, b: {c: 2, d: 3}, d: 4}),
    { b: { c: 2 }, d: 4 }
  ],
  [
    filter(v => v % 2 === 0)({a: 1, b: {c: 5, d: 3}, d: 4}),
    { b: {}, d: 4 }
  ],
  [
    filter(v => v % 2 === 0)({a: 1, b: {c: 2, d: 3}, d: 4}),
    { b: { c: 2 }, d: 4 }
  ],
  [
    filter ( v => v % 2 === 0 ) ( dict ),
    { b: { ba: 2, bc: { bca: 4 } } }
  ],
  [
    filter ( (v, k) => k.length > 1) ( dict ),
    { b: { ba: 2, bb: 3, bc: { bca: 4 } } }
  ],
  [
    filter ( (v, k) => k.length <= 1) ( dict ),
    { a: 1, b: { bc: {} }, c: 5 }
  ],

  [
    filter ( v => v % 2 === 0 ) ( dict ),
    { b: { ba: 2, bc: { bca: 4 } } }
  ],
  [
    filter ( (v, k) => k.length <= 1) ( dict ),
    { a: 1, b: { bc: {} },  c: 5 }
  ],
  [
    filter ( (v, k) => k.length > 1) ( dict ), // filter WITH key
    { b: { ba: 2, bb: 3, bc: { bca: 4 } } }
  ],
  [
    filter.key ( (k, v) => k.length > 1) ( dict ), // filter BY key
    {}
  ],
];





describe('filter', () => {
  it('Should work for README and other handmade examples', () => {

    for (const [result, expected] of examples)
      expect(expected).to.deep.equal(result);

  });
});
