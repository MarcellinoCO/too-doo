import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filterReducer from "./slices/filterSlice";
import todoReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});

export default store;
