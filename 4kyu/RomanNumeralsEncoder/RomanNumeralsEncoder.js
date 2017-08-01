function solution(number){
  var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var answer = '';
  
  for (var i = 0; i < values.length; i++) {
    answer += Array(Math.floor(number/values[i])+1).join(symbols[i]);
    number = number % values[i];
  }
  
  return answer;
}