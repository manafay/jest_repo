function createSelector(...allArgs) {
  const argFunc = allArgs.pop();
  const allParams = allArgs;

  const result = argFunc(...allParams);

  return result;
}

export default createSelector;
