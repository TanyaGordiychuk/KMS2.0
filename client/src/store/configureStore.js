import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import user from '../reducers/user';
/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  );

  return createStore(
    user,
    composeEnhancers(applyMiddleware(thunk)),
  );
};
/* eslint-enable */
export default configureStore;
