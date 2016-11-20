

function createStore(state) {
  let globalState = {};
  const listeners = [];

  const getState = () => globalState;

  function createAction(actionType) {
    const action = {};
    if (actionType)
      action.type = actionType;
    return action;
  }

  const action = actionType => createAction(actionType);

  const dispatch = actionType => {
    action(actionType);
    if (globalState !== state)
      globalState = state;
    listeners.forEach(l => l);
  };

  const subscribe = listener => listeners.push(listener);

  return { getState, dispatch, subscribe };
}

export default createStore;
