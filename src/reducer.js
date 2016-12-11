
function createReducer(initialState, actions) {
  const globalState = typeof initialState !== 'undefined' ? initialState : [];
  const allActions = actions;

  const reducer = (state = globalState, action) => {
    Object.keys(allActions).filter(key => action.type === key)
                           .map(key => key(state, action));
    return state;
  };
  return { reducer };
}

export default createReducer;

// const r = createReducer({ count: 0 }, {
//   INCREMENT: (state, action) => state.merge({
//     count: state.count + 1,
//     token: action.payload.token,
//   }),
//
//   DECREMENT: (state, action) => state.merge({
//     count: state.count - 1,
//     token: action.payload.token,
//   }),
// });
//
// function createAction(actionType) {
//   const action = {};
//   if (actionType)
//     action.type = actionType.toUpperCase();
//   return action;
// }
//
//
// console.log(r);
//
// const INCREMENT = 'INCREMENT';
// console.log(r.reducer({ count: 4 }, createAction(INCREMENT)));
// console.log(r.check(INCREMENT));
