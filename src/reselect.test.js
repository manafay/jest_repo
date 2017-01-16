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

test('reselectExample', () => {
  const shopItemsSelector = state => state.shop.items;
  const taxPercentSelector = state => state.shop.taxPercent;

  const exampleState = {
    shop: {
      taxPercent: 8,
      items: [
        { name: 'apple', value: 1.20 },
        { name: 'orange', value: 0.95 },
      ],
    },
  };
  const subtotalSelector = createSelector(
    shopItemsSelector(exampleState),
    items => items.reduce((acc, item) => acc + item.value, 0));

  expect(subtotalSelector).toEqual(2.15);

  const taxSelector = createSelector(
    subtotalSelector,
    taxPercentSelector(exampleState),
    (subtotal, taxPercent) => subtotal * (taxPercent / 100));

  expect(taxSelector).toEqual(0.172);

  const totalSelector = createSelector(
    subtotalSelector,
    taxSelector,
    (subtotal, tax) => ({ total: subtotal + tax }));

  expect(totalSelector).toEqual({ total: 2.322 });
});
