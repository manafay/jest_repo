import { createAction } from 'redux-actions';
import createReducer from './reducer';

test('createReducer', () => {
  const reduxReducer = createReducer({ count: 0 }, {
    INCREMENT: (state, action) =>
    Object.assign({}, state, { count: state.count + 1, token: action.payload }),
    DECREMENT: (state, action) => state.merge({
      count: state.count - 1,
      token: action.payload,
    }),
  });
  const increment = createAction('INCREMENT');
  expect(reduxReducer.reducer({ count: 4 }, increment(8))).toEqual({ count: 5, token: 8 });
});
