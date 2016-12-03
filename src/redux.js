function createStore(reducer, initialState) {
  let globalState = initialState;
  const listeners = [];

  const getState = () => globalState;

  const isAllowed = type => typeof (type) === 'string';

  function createAction(actionType) {
    const action = {};
    if (isAllowed(actionType))
      action.type = actionType.toUpperCase();
    return action;
  }

  const action = actionType => createAction(actionType);

  const dispatch = actionType => {
    const state = reducer(globalState, action(actionType));
    if (globalState !== state)
      globalState = state;
    listeners.forEach(l => l);
  };

  const subscribe = listener => listeners.push(listener);

  return { getState, dispatch, subscribe };
}

export default createStore;
