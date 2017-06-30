const {inspect} = require('util');

const configurations = require('./configurations.js');
const {match} = require('./util.js');
const {deep, shallow} = require('../mixins/filter.js');


const filter = f => obj => 
  deep.value(getConf(obj))(f)(obj);

filter.key = f => obj =>
  deep.key(getConf(obj))(f)(obj);


const getConf = obj => {
  const conf = match(obj, configurations);

  if (conf === undefined)
    throw TypeError(`Can't filter ${inspect(obj)}`);

  return conf;
}

module.exports = filter;
