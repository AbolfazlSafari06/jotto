import { createStore, applyMiddleware } from "redux";
import rootRedcer from "./reducers/index";
import reduxThunk from "redux-thunk";

export const middlewares = [reduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootRedcer);