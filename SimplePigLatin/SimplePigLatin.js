function pigIt(str){
  return str.split(" ").map(function(i){ return i.slice(1)+i[0]+"ay" }).join(" ")
}