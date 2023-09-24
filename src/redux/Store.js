import { applyMiddleware, createStore } from "redux";
import { imageReducer } from "./Reducer";
import thunk from "redux-thunk";



export const Store = createStore(imageReducer,applyMiddleware(thunk));

