const {inspect} = require('util');

const configurations = require('./configurations.js');
const {match} = require('./util.js');
const {deep, shallow} = require('../mixins/fmap.js');


const fmap = f => obj => 
  deep.value(getConf(obj))(f)(obj);


fmap.key = f => obj =>
  deep.key(getConf(obj))(f)(obj);

fmap.shallow = f => obj =>
  shallow.keyValue(getConf(obj))(f)(obj);


const getConf = obj => {
  const conf = match(obj, configurations);

  if (conf === undefined)
    throw TypeError(`Can't fmap ${inspect(obj)}`);

  return conf;
}

module.exports = fmap;
