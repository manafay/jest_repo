
function createReducer(initialState, actions) {
  let globalState = typeof initialState !== 'undefined' ? initialState : [];
  const allActions = actions;

  const reducer = (state, action) => {
    globalState = state;
    Object.keys(allActions).filter(key => action.type === key.pop())
                                  .map(key => key(globalState));
    return globalState;
  };
  return { reducer };
}

export default createReducer;
