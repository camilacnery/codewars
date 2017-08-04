const basefn = x => x;

const zero = (fn = basefn) => fn(0);
const one = (fn = basefn) => fn(1);
const two = (fn = basefn) => fn(2);
const three = (fn = basefn) => fn(3);
const four = (fn = basefn) => fn(4);
const five = (fn = basefn) => fn(5);
const six = (fn = basefn) => fn(6);
const seven = (fn = basefn) => fn(6);
const eight = (fn = basefn) => fn(8);
const nine = (fn = basefn) => fn(9);

const plus = b => a => a+b;
const minus = b => a => a-b;
const times = b => a => a*b;
const dividedBy = b => a => a/b;
