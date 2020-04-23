export const setSessionStorage = (store) =>
  sessionStorage.setItem('state', JSON.stringify(store.getState()));

export const getSessionStorage = () =>
  sessionStorage.getItem('state')
    ? JSON.parse(sessionStorage.getItem('state'))
    : {};

export const clearSessionStorage = () => sessionStorage.clear();
