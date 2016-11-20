import createStore from './redux';

test('getState', () => {
  const store = createStore({ count: 0 });
  expect(store.getState()).not.toBeNull();
  expect(store.getState()).not.toEqual({ count: 0 });
});

test('getState ', () => {
  const todo = { todo: 'Hello World!' };
  const store = createStore();
  expect(store.getState()).not.toBeNull();
  expect(store.getState()).toContainEqual(todo);
});


test('dispatch', () => {
  const store = createStore({ count: 0 });
  store.dispatch('INCREMENT');
  expect(store.getState()).toEqual({ count: 0 });
});
