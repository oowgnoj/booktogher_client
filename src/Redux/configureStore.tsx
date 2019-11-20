import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  AnyAction,
  Store,
  Action
} from "redux";
import ReduxThunk from "redux-thunk";
import recommend from "./modules/recommend";
import user from "./modules/user";

// console.log(reducer);
const store: Store<{}, Action<any>> = createStore(
  combineReducers({ recommend, user }),
  applyMiddleware(ReduxThunk)
);

export default store;
