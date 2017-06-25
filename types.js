const isPlainObject = require('lodash.isplainobject');

const isMap = arg =>
  (arg.constructor === Map)
  ? true
  : false;


module.exports = {
  isPlainObject,
  isMap,
};
