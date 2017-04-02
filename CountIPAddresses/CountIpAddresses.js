function ipsBetween(start, end){
  var s = ipToInt(start.split('.').map(function(x){return parseInt(x)}));
  var e = ipToInt(end.split('.').map(function(x){return parseInt(x)})); 
  return e - s;
}

function ipToInt(ip){
	return (ip[0] * Math.pow(256,3)) + (ip[1] * Math.pow(256,2)) + (ip[2]* 256) + (ip[3])
}