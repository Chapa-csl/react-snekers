import { combineReducers } from "redux";
import addToCartReducer from "./addToCartReducer";

const rootReducer = combineReducers({
	cart: addToCartReducer,
});

export default rootReducer;
