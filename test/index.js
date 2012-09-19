
var map = require('..');

describe('map(arr, fn)', function(){
  it('should map values', function(){
    var arr = [1,2,3];
    arr = map(arr, function(n){ return n * 2 });
    arr.should.eql([2,4,6]);
  })

  it('should pass indexes', function(){
    var arr = [1,2,3];
    arr = map(arr, function(n, i){ return i });
    arr.should.eql([0, 1, 2]);
  })
})