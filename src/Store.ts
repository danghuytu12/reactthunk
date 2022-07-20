import { applyMiddleware, createStore } from "redux";
import RootReducers from "./reducers/RootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const Store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default Store;