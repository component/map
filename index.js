
module.exports = function(arr, fn){
  var ret = [];
  fn = toFunction(fn);
  for (var i = 0; i < arr.length; ++i) {
    ret.push(fn(arr[i], i));
  }
  return ret;
};

function toFunction(obj) {
  switch (typeof obj) {
    case 'function':
      return obj;
    case 'string':
      return stringToFunction(obj);
    default:
      throw new TypeError('invalid callback "' + obj + '"');
  }
}

function stringToFunction(str) {
  var props = str.split('.');
  return function(obj){
    for (var i = 0; i < props.length; ++i) {
      obj = obj[props[i]];
    }
    return obj;
  }
}