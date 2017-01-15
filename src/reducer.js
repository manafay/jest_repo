
function createReducer(initialState, actions) {
  const globalState = typeof initialState !== 'undefined' ? initialState : [];
  const allActions = actions;

  const reducer = (state = globalState, action) => {
    Object.keys(allActions).filter(key => action.type === key)
                           .map(key => allActions[key](state, action));
    // return state;
  };
  return { reducer };
}

export default createReducer;
