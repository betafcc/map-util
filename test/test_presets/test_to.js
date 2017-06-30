const {expect} = require('chai');


const to = require('../../src/presets/to.js');


const dict = { a: 1, b: { ba: 2, bb: 3, bc: { bca: 4 } }, c: 5 };

const mapy = new Map(
 [ [ 'a', 1 ],
   [ 'b', new Map(
          [ [ 'ba', 2 ],
            [ 'bb', 3 ],
            [ 'bc', new Map([ ['bca', 4] ]) ] ] )
   ],
   [ 'c' , 5 ] ]
);

const lispy =
 [ [ 'a', 1 ],
   [ 'b', [ [ 'ba', 2 ],
            [ 'bb', 3 ],
            [ 'bc', [ ['bca', 4] ] ] ] ],
   [ 'c' , 5 ] ];


describe('Automatic convertes', () => {

   it('Should work for README examples', () => {
      expect(to.map(dict)).to.deep.equal(mapy);
      expect(to.array(dict)).to.deep.equal(lispy);

      expect(to.object(mapy)).to.deep.equal(dict);
      expect(to.array(mapy)).to.deep.equal(lispy);

      expect(to.object(lispy)).to.deep.equal(dict);
      expect(to.map(lispy)).to.deep.equal(mapy);
   });

   it('Should work for common target examples', () => {
      expect(to.object(mapy)).to.deep.equal(to.object(lispy));
      expect(to.map(dict)).to.deep.equal(to.map(lispy));
      expect(to.array(mapy)).to.deep.equal(to.array(dict));

   });
});
