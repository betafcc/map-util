const {keys_values, negate} = require('./util.js');

const depthFirst   = {};
const breadthFirst = {};
const levels       = {};


depthFirst.value = ({iter, is}) => function* (m) {
  for (const [k, v] of iter(m)) {
    if (is(v))
      yield* depthFirst.value ({iter, is}) (v);
    else
      yield v;
  }   
};

depthFirst.key = ({iter, is}) => function* (m) {
  for (const [k, v] of iter(m)) {
    if (is(v))
      yield* depthFirst.key ({iter, is}) (v);

    yield k;
  }   
};



breadthFirst.value = ({iter, is}) => function* (m) {
  const queue = [];

  for (const [k, v] of iter(m)) {
    if (is(v))
      queue.push(v);
    else
      yield v;
  }

  for (const n of queue)
    yield* breadthFirst.value ({iter, is}) (n);
};

breadthFirst.key = ({iter, is}) => function* (m) {
  const queue = [];

  for (const [k, v] of iter(m)) {
    yield k;
    if (is(v))
      queue.push(v);
  }

  for (const n of queue)
    yield* breadthFirst.key ({iter, is}) (n);
};


const _levelsValue = ({iter, is}) => function* (ms) {
  if (ms.length !== 0) {
    const [keys, values] = keys_values(iter)(ms);
    yield values.filter(negate(is));
    yield* _levelsValue({iter, is})(values.filter(is));
  }
};

const _levelsKey = ({iter, is}) => function* (ms) {
  if (ms.length !== 0) {
    const [keys, values] = keys_values(iter)(ms);
    yield keys;
    yield* _levelsKey({iter, is})(values.filter(is));
  }
};

levels.value = ({iter, is}) => m => _levelsValue ({iter, is})([m]);
levels.key   = ({iter, is}) => m => _levelsKey   ({iter, is})([m]);

module.exports = {depthFirst, breadthFirst, levels};
