import { createStore } from "redux";
import { rootReducer } from "../reducers";
export const rootStore = createStore(rootReducer);