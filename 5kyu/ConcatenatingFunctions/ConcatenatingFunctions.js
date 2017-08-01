Function.prototype.pipe = function(f){
  var f1 = this;
  return function(x) {
    return f(f1(x));
  } 
}