function blackFriday(year) {
  var map = {6: 5, 0: 4, 1: 3, 2: 2, 3: 1, 4: 0, 5: 6};
  return map[new Date(year, 10, 1).getDay()] + 23;
}