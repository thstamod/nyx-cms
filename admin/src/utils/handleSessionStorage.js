export const setSessionStorage = (key, state) =>
  sessionStorage.setItem(key, JSON.stringify(state));

export const getSessionStorage = (key) =>
  sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : {};

export const clearSessionStorage = () => sessionStorage.clear();

export const removeItemSessionStorage = (key) => sessionStorage.removeItem(key);
