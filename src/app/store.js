import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import newUserReducer from "../features/newUserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
  },
});
