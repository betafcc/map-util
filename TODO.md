fmap()()
filter()()



({props})
    .empty()
    .iter(v)
    .set(o, k, v)
    .is(o)
    .from(<other map>)
    .of(<compatible to conf obj>)
        .value
        .iter()
        .set(k, v)
        .props
            .empty()
            .iter(v)
            .set(o, k, v)
            .is(o)
        .to(map({other props}))
        .iterate
            .value
            .key
            .keyValue
                .depthFirst()
                    .map(v => ...)
                    .filter(v => ...)
                    .reduce((acc, n) => ... [, initial])
                .breadthFirst()
                    .map(v => ...)
                    .filter(v => ...)
                    .reduce((acc, n) => ... [, initial])
        .shallow
            .value
            .key
            .keyValue
                .map(([k, v]) => ...)
                .filter(([k, v]) => ...)
        .deep
            .value
            .key
            .keyValue
                .map(([k, v]) => ...)
                .filter(([k, v]) => ...)


// the provided set function decides if these operations will be mutable or not
