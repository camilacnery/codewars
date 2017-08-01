function matrixMultiplication(a, b){
  var m = [];
  for (var i=0;i<a.length;i++){
    m[i]=[];
    for (var j=0; j<a.length;j++){
      m[i][j] = 0;
      for (var k=0; k<a.length;k++){
        m[i][j] = m[i][j] + a[i][k]*b[k][j];
      } 
    }
  } 
  return m;
}