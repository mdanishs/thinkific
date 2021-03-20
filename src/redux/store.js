import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const middlware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlware.push(logger);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlware))
)

export default store;