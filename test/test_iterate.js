// > bf = iterate.breadthFirst.value({is: is.dict, iter: Object.entries})
// [Function]
// > bf({a: {b: {c: 1}, d: 2}, e: 3})
// {}
// > [...bf({a: {b: {c: 1}, d: 2}, e: 3})]
// [ 3, 2, 1 ]
// > df = iterate.depthFirst.value({is: is.dict, iter: Object.entries})
// [Function]
// > [...df({a: {b: {c: 1}, d: 2}, e: 3})]
// [ 1, 2, 3 ]
// > 
