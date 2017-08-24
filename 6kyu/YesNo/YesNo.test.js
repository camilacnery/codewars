const yesNo = require('./YesNo');

test('reorder sequence of 10', () => {
  expect(yesNo([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 3, 5, 7, 9, 2, 6, 10, 8, 4]);
});

test('reorder array of strings', () => {
  expect(yesNo(['this', 'code', 'is', 'right', 'the'])).toEqual(['this', 'is', 'the', 'right', 'code']);
});