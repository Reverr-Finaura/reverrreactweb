import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import newUserReducer from "../features/newUserSlice";
import animationReducer from "../features/animationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
    animation: animationReducer,
  },
});
