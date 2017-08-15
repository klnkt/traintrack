import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducersConfig from './ReducersConfig';
import history from './history';
import { localStorageBackupMiddleware, getStateFromLocalStorage } from './core/localStorageBackupMiddleware';

const store = createStore(
    reducersConfig,
    getStateFromLocalStorage(),
    applyMiddleware(
        routerMiddleware(history),
        localStorageBackupMiddleware,
    ),
);
export default store;
