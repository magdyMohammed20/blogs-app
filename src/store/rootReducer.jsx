import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogSlice";

// Combine Multi Reducers Here To Use In The Store Configuration
const rootReducer = combineReducers({
  blogs: blogReducer,
});

export default rootReducer;
