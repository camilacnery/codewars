function toCamelCase(str){
  const array = str.split(/[-_]+/)
  return array[0].concat(array.slice(1).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(""));
}