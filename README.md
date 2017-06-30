# map-util
Micro util for manipulation of Map-Like objects

Install
-------

    npm install @betafcc/map-util


Basic Usage
-----------

```js
const {fmap, filter, to, iter} = require('@betafcc/map-util');


const dict = { a: 1, b: { ba: 2, bb: 3, bc: { bca: 4 } }, c: 5 }

const mapy =  to.map( dict )
// Map(3) {"a" => 1, "b" => Map(3) {...}, "c" => 5}

const lispy = to.array ( dict )
 // [ [ 'a', 1 ],
 //   [ 'b', [ [ 'ba', 2 ],
 //            [ 'bb', 3 ],
 //            [ 'bc', [ ['bca', 4] ] ] ] ],
 //   [ 'c' , 5 ] ]


to.object( mapy )
to.object( lispy )
// { a: 1, b: { ba: 2, bb: 3, bc: { bca: 4 } }, c: 5 }

fmap  ( v => v**2 ) ( dict )
// { a: 1, b: { ba: 4, bb: 9, bc: { bca: 16 } }, c: 25 }
fmap  ( v => v**2 ) ( mapy )
// Map(3) {"a" => 1, "b" => Map(3) {...}, "c" => 25}

fmap.key  ( k => k.toUpperCase() ) ( dict )
// { A: 1, B: { BA: 2, BB: 3, BC: { BCA: 4 } }, C: 5 }


filter ( v => v % 2 === 0 ) ( dict )
// { b: { ba: 2, bc: { bca: 4 } } }

filter ( (v, k) => k.length <= 1) ( dict )
//  { a: 1, b: { bc: {} },  c: 5 }
// note 'bc' still here, because its filtering values, not keys

filter ( (v, k) => k.length > 1) ( dict ) // filter WITH key
// { b: { ba: 2, bb: 3, bc: { bca: 4 } } }

filter.key ( (k, v) => k.length > 1) ( dict ) // filter BY key
// {}


// Deep iterators:
// Note that many Map-Like are not guaranteed
// to be ordered (like plainObjects)
[...iter.df(dict)] // Iterate depth First
// [1, 2, 3, 4, 5]
[...iter.levels(dict)]
// [[1, 5], [2, 3], [4]]
[...iter.bf.key(dict)]
// ['a', 'c', 'ba', 'bb', 'bc', 'bca']

```


Full Api so far:
----------------

```js

MapLike = Map | PlainObject | MapShapedArray

mapUtil
    .to.object(MapLike)
    .to.map(MapLike)
    .to.array(MapLike)

    .fmap(v => ...)(MapLike)
    .fmap((v, k) => ...)(MapLike)
    .fmap.key(k => ...)(MapLike)
    .fmap.shallow(([k, v]) => ...)(MapLike)

    .filter(v => ...)(MapLike)
    .filter((v, k) => ...)(MapLike)

    .iter.df(MapLike)
    .iter.df.key(MapLike)
    .iter.bf(MapLike)
    .iter.bf.key(MapLike)
    .iter.levels(MapLike)
    .iter.levels.key(MapLike)

```

TODO
----
    - [ ] Basic
    - [ ] Better Tests
    - [ ] Make dist Bundle
        - [ ] Port to ES7+ or TypeScript ?
        - [ ] With or without browser-polyfills ?
    - [ ] Features:
        - [ ] iter.leves // decide behavior
        - [ ] addType :: conf -> MapUtil
        - [ ] equivalent :: MapLike a, MapLike b => a -> b -> bool
            Check if two MapLike are deep-equivalent
        - [ ] from :: conf -> MapUtil conf
        - [ ] of   :: MapUtil a => b -> a
        - [ ] poly utils, to handle eg. { a: [ ['b', 1] ] }
            - [ ] normalize
            - [ ] fmap
            - [ ] filter
    - [ ] Expose non polymorphic functions (eg. object.fmap)
        - [ ] To API
        - [ ] To specific bundles
