import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { optionsReducer } from "./features/options-slice";
import { passwordReducer } from "./features/password-slice";

export const rootReducer = combineReducers({
  options: optionsReducer,
  password: passwordReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
