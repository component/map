
/**
 * Map the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

module.exports = function(arr, fn){
  var ret = [];
  fn = toFunction(fn);
  for (var i = 0; i < arr.length; ++i) {
    ret.push(fn(arr[i], i));
  }
  return ret;
};

/**
 * Convert `obj` to a `Function`.
 *
 * @param {Mixed} obj
 * @return {Function}
 * @api private
 */

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

/**
 * Convert property `str` to a function.
 *
 * @param {String} str
 * @return {Function}
 * @api private
 */

function stringToFunction(str) {
  var props = str.split('.');
  return function(obj){
    for (var i = 0; i < props.length; ++i) {
      if (null == obj) return;
      obj = obj[props[i]];
    }
    return obj;
  }
}