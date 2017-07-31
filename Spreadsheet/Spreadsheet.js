function spreadsheet(s) {
  if (s.charAt(0) === 'R') {
    const values = s.split(/[RC]/);
    const row = values[1];
    const columnNumber = parseInt(values[2], 10);
    let column = '';
    for (let i = columnNumber; i >= 1; i /= 26) {
      i-=1;
      column = String.fromCharCode(65+(i%26)) + column;
    }
    return `${column}${row}`;
  } else {
    const row = s.replace(/\D/g,'');
    let columnCode = s.slice(0, s.length - row.length);
    const column = columnCode.split('').reverse().reduce((previous, current, i) => {
      return previous + (Math.pow(26, i) * (current.charCodeAt() - 64));
    }, 0);
    return `R${row}C${column}`;
  }
}
