import createStore from './redux';

const counter = (prevState, currentAction) => {
  switch (currentAction.type) {
    case 'INCREMENT':
      return { count: prevState.count + 2 };
    case 'DECREMENT':
      return { count: prevState.count - 2 };
    default:
      return prevState;
  }
};

test('getState', () => {
  const store = createStore(counter, { count: 0 });
  expect(store.getState()).not.toBeNull();
  expect(store.getState()).toEqual({ count: 0 });
});

// test('getState ', () => {
//   const todo = { todo: 'Hello World!' };
//   const store = createStore();
//   expect(store.getState()).not.toBeNull();
//   expect(store.getState()).toContainEqual(todo);
// });


test('dispatch', () => {
  const store = createStore(counter, { count: 0 });
  store.dispatch('INCREMENT');
  expect(store.getState()).toEqual({ count: 2 });
});
