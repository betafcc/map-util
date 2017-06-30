
map({}).of()

map({props}).from( map({props}).of(wtv) )

map({props}).of(wtv).to( map({props}) )


module.exports = ({factory, get, set, iter, type}) => {

  return {
    of   : valueTharPassesTypeTest => ... ,
    from : otherMapping => ...
  };
};

