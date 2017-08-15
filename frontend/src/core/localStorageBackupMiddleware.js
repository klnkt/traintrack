const LOCAL_STORAGE_STATE_KEY = 'appState';
const localStorage = window.localStorage;
export const localStorageBackupMiddleware = store => next => (action) => {
  // pass action
  next(action);
  // get "next" state and store it in LS
  localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(store.getState()));
};
export const getStateFromLocalStorage = () => {
  const localStorageValue = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
  // we need to transform date keys to Date object
  return localStorageValue === null ? {} : JSON.parse(localStorageValue,
    (key, value) => {
      if (key === 'date') {
        return new Date(value);
      }
      return value;
    },
  );
};
