export const setSessionStorage = (store) => sessionStorage.setItem('reduxState',
  JSON.stringify(store.getState()));


export const getSessionStorage = () => (sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {});
