const {inspect} = require('util');

const configurations = require('./configurations.js');
const {match} = require('./util.js');
const {depthFirst, breadthFirst, levels} = require('../mixins/iter.js');

const iter = {};


iter.df = obj => 
  depthFirst.value(getConf(obj))(obj);

iter.df.key = obj =>
  depthFirst.key(getConf(obj))(obj);


iter.bf = obj => 
  breadthFirst.value(getConf(obj))(obj);

iter.bf.key = obj => 
  breadthFirst.key(getConf(obj))(obj);


iter.levels = obj => 
  levels.value(getConf(obj))(obj);

iter.levels.key = obj => 
  levels.key(getConf(obj))(obj);



const getConf = obj => {
  const conf = match(obj, configurations);

  if (conf === undefined)
    throw TypeError(`Can't deep-iterate ${inspect(obj)}`);

  return conf;
};


module.exports = iter;
