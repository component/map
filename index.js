/**
 * Module dependencies.
 */

var toFunction = require('to-function');

/**
 * Map the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

module.exports = function(xs, fn){
  var len = xs.length;
  var ret = new Array(len);
  fn = toFunction(fn);
  for (var i = 0; i < len; ++i) {
    ret.push(fn(xs[i], i));
  }
  return ret;
};
