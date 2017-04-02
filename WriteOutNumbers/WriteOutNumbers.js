var a = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  
function number2words(n){
  if (n < 100) return tens(n);
  else if (n < 1000) return hundreds(n);
  else if (n < 1000000) return thousands(n);
}

function thousands(n){
  if (n%1000 === 0 && Math.floor(n/1000) < 100) return tens(Math.floor(n/1000))+" thousand";
  else if (n%1000 < 100 && Math.floor(n/1000) < 100) return tens(Math.floor(n/1000))+" thousand "+tens(n%1000);
  else if (Math.floor(n/1000) < 100) return tens(Math.floor(n/1000))+" thousand "+hundreds(n%1000);
  else if (n%1000 === 0 && Math.floor(n/1000) >= 100) return hundreds(Math.floor(n/1000))+" thousand";
  else if (n%1000 < 100 && Math.floor(n/1000) >= 100) return hundreds(Math.floor(n/1000))+" thousand "+tens(n%1000);
  else return hundreds(Math.floor(n/1000))+" thousand "+hundreds(n%1000);
}

function hundreds(n) {
  if (n%100 === 0) return a[Math.floor(n/100)]+" hundred";
  else return a[Math.floor(n/100)]+" hundred "+tens(n%100);
}

function tens(n) {
  if (n < 20) return a[n];
  else if (n >= 20 && n % 10 === 0) return b[n/10];
  else return b[Math.floor(n/10)]+'-'+a[n % 10]; 
}