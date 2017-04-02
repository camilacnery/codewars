function isMerge(s, part1, part2) {
  if (s.length !== (part1.length + part2.length)) return false;
  return check(s, part1, part2);
}

function check(s, part1, part2) {
  if (s.length === 0) return true;
  if (s[0] !== part1[0] && s[0] !== part2[0]) return false;
  if (check(s.substring(1), part1.substring(1), part2)) return true;
  else return check(s.substring(1), part1, part2.substring(1));
}