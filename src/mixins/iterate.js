const depthFirst   = {};
const breadthFirst = {};


depthFirst.value = ({iter, is}) => function* (m) {
  for (const [k, v] of iter(m)) {
    if (is(v))
      yield* depthFirst.value ({iter, is}) (v);
    else
      yield v;
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


module.exports = {depthFirst, breadthFirst};
