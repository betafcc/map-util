Test
    - [X] to
        - [X] mixins/converter
        - [X] mixins/converter com presets/configurations
        - [X] to
    - [X] fmap
        - [X] README examples



MapLike = Map | PlainObject | MapShapedArray

mapUtil
    - [X] .to
        - [X] .to.object(MapLike)
        - [X] .to.map(MapLike)
        - [X] .to.array(MapLike)

    - [ ] .fmap
        - [X] .fmap(v => ...)(MapLike)
        - [X] .fmap((v, k) => ...)(MapLike)
        - [X] .fmap.key(k => ...)(MapLike)
        - [ ] .fmap.key((k, v) => ...)(MapLike)
        - [X] .fmap.shallow(([k, v]) => ...)(MapLike)

    - [X] .filter
        - [X] .filter(v => ...)(MapLike)
        - [X] .filter((v, k) => ...)(MapLike)
        - [X] .filter.key(k => ...)(MapLike)
        - [X] .filter.key((k, v) => ...)(MapLike)

    - [ ] .iter
        - [ ] .iter.df(MapLike)
        - [ ] .iter.df.key(MapLike)
        - [ ] .iter.bf(MapLike)
        - [ ] .iter.bf.key(MapLike)
        - [ ] .iter.levels(MapLike)
        - [ ] .iter.levels.key(MapLike)
