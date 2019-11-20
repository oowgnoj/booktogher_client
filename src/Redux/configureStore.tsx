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
import handleRecommendActions from "./modules/recommend";
import handleUserActions from "./modules/user";

const rootReducer: Reducer = combineReducers({
  handleRecommendActions,
  handleUserActions
});
// console.log(reducer);
const store: Store<{}, Action<any>> = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

export default store;
