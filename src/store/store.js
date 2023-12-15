import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../reducer/authSlice";
import  usersReducer from "../reducer/userSlice.js";

const store = configureStore({
  reducer: {
    login: authSlice,
    users: usersReducer,
  },
});

export default store;
