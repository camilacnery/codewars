function generateHashtag (str) {
  if (str.length == 0) return false;
  else {
    var h = '#'+str.split(' ').map(function(s){
        return s[0] ? s[0].toUpperCase()+s.slice(1) : ''
      }).join("");
    return h.length > 140 ? false : h;
  }
}