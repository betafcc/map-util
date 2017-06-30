const match = (obj, configurations) =>
  Object
    .values(configurations)
    .find(conf => conf.is(obj));


module.exports = {
  match,
};
