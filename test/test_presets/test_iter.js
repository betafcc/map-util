const {expect} = require('chai');


const iter = require('../../src/presets/iter.js');


const dict = {
  a: 1,
  b: {
    c: 2, 
    d: {
      e: 3,
      f: 3
    },
    g: 2,
    h: {
      i: 3
    }
  },
  d: 1
};

const examples_df = [
  [[...iter.df({a: 3})], [ 3 ] ],
  [[...iter.df({a: 3, b: {c: 3}})], [ 3, 3 ] ],
  [[...iter.df({a: 3, b: {c: 4}})], [ 3, 4 ] ],
  [[...iter.df({a: 3, b: {c: 4}, c: 5})], [ 3, 4, 5 ] ],
  [[...iter.df({a: 3, b: {c: {k: 11, j: 12}}, c: 5})], [ 3, 11, 12, 5 ] ],
];

const examples_bf = [
  [[...iter.bf({a: 3, b: {c: {k: 11, j: 12}}, c: 5})], [ 3, 5, 11, 12 ] ],
  [[...iter.bf({a: 3})], [ 3 ] ],
  [[...iter.bf({a: 3, b: {c: 3}})], [ 3, 3 ] ],
  [[...iter.bf({a: 3, b: {c: 4}})], [ 3, 4 ] ],
  [[...iter.bf({a: 3, b: {c: 4}, c: 5})], [ 3, 5, 4 ] ],
]

const examples_levels = [
  [[...iter.levels(dict)], [[1, 1], [2, 2], [3, 3, 3]]],
  [[...iter.levels.key(dict)], [ [ 'a', 'b', 'd' ], [ 'c', 'd', 'g', 'h' ], [ 'e', 'f', 'i' ] ] ],
];



describe('iter', () => {
  describe('iter.df', () => {

    it('Should work for README and other handmade examples', () => {
      for (const [result, expected] of examples_df)
        expect(expected).to.deep.equal(result);
    });

  });

  describe('iter.bf', () => {

    it('Should work for README and other handmade examples', () => {
      for (const [result, expected] of examples_bf)
        expect(expected).to.deep.equal(result);
    });

  });

  describe('iter.levels', () => {

    it('Should work for README and other handmade examples', () => {
      for (const [result, expected] of examples_levels)
        expect(expected).to.deep.equal(result);
    });

  });

});
