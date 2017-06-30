const {inspect} = require('util');

const {match} = require('./util.js');
const configurations = require('./configurations.js');
const convert = require('../mixins/convert.js');


const to = {};


for (const [_to, {empty, set}] of Object.entries(configurations)) {

  to[_to] = (obj) => {
    const conf = match(obj, configurations);

    if (conf === undefined)
      throw TypeError(`Can't convert ${inspect(obj)} to ${_to}`);

    const {iter, is} = conf;

    return convert.deep({empty, iter, set, is})(obj);
  };

}


module.exports = to;
