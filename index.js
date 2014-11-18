
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

module.exports = function(arr, fn, ctx){
  var ret = [];
  fn = toFunction(fn);
  ctx = ctx || this;
  for (var i = 0; i < arr.length; ++i) {
    ret.push(fn.call(ctx, arr[i], i));
  }
  return ret;
};
