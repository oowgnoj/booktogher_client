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
import handleActions from "./modules/recommend";

// const reducer: Reducer<unknown, AnyAction> = combineReducers(handleActions);
// console.log(reducer);
const store: Store<{}, Action<any>> = createStore(
  handleActions,
  applyMiddleware(ReduxThunk)
);

export default store;
