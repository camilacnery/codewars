function pascal(depth) {
  if (depth == 1) return [[1]];
  else {
    var t = pascal(depth-1), l = t[t.length-1], nl = [];
    for (var i=0; i<l.length+1; i++) {
      if (i==0 || i == l.length) nl[i] = 1;
      else nl[i] = l[i-1]+l[i];
    }
    t.push(nl);
    return t;
  }
}