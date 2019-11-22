import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  compose,
  Store,
  Action
} from "redux";
import ReduxThunk from "redux-thunk";

import recommend from "./modules/recommend";
import user from "./modules/user";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<{}, Action<any>> = createStore(
  combineReducers({ recommend, user }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
