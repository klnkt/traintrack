import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducersConfig from './ReducersConfig';
import Mock from './DataMock';
import history from './history';

const store = createStore(
    reducersConfig,
    Mock,
    applyMiddleware(routerMiddleware(history)),
);
export default store;
