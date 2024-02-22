import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Pass Reducers Here To configureStore
const store = configureStore({
  reducer: rootReducer,
});

export default store;
