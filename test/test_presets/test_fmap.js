const {expect} = require('chai');

const to   = require('../../src/presets/to.js');
const fmap = require('../../src/presets/fmap.js');


const dict = { a: 1, b: { ba: 2, bb: 3, bc: { bca: 4 } }, c: 5 };
const mapy =  to.map( dict );
const lispy = to.array ( dict );



const examples = [
  // REPL EXAMPLES:
  [
    fmap.key(k => k.toUpperCase())({a: 3, b: 2, c: 3, d: {e: 2}}),
    { A: 3, B: 2, C: 3, D: { E: 2 } }
  ],
  [
    fmap.shallow(([k, v]) => [v, k])({a: 3, b: 2, c: 3, d: {e: 2}}),
    { '2': 'b', '3': 'c', '[object Object]': 'd' }
  ],

  // README EXAMPLES:
  [
    fmap  ( v => v**2 ) ( dict ),
    { a: 1, b: { ba: 4, bb: 9, bc: { bca: 16 } }, c: 25 }
  ],
  [
    fmap  ( v => v**2 ) ( mapy ),
    new Map([['a', 1],
             ['b', new Map([['ba', 4],
                            ['bb', 9], ['bc', new Map([['bca', 16]])]])],
             ['c', 25]])
  ],
  [
    fmap.key  ( k => k.toUpperCase() ) ( dict ),
    { A: 1, B: { BA: 2, BB: 3, BC: { BCA: 4 } }, C: 5 }
  ]
]


describe('fmap', () => {
  it('Should work for README and other handmade examples', () => {

    for (const [result, expected] of examples)
      expect(result).to.deep.equal(expected);

  });
});
