import createSelector from './reselect';


test('withOneArg', () => {
  const argFunc = item => item.value * item.value;
  const argOne = { value: 100 };

  expect(createSelector(argOne, argFunc)).toEqual(10000);
});

test('withThreeArgs', () => {
  const argFunc = (x, y) => x.value * y.value;
  const x = { value: 100 };
  const y = { value: 200 };

  expect(createSelector(x, y, argFunc)).toEqual(20000);
});
