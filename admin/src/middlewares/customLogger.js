export default (store) => (next) => (action) => {
  console.groupCollapsed(`${action.type}`);
  console.log('%c Previous state ', 'color:red', store.getState());
  const result = next(action);
  console.log('%c Updated state ', 'color:green', store.getState());
  console.groupEnd();
  return result;
};
