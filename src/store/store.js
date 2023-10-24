import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore(rootReducer);

export default store;
