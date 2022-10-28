import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import newUserReducer from "../features/newUserSlice";
import animationReducer from "../features/animationSlice";
import sidebarReducer from "../features/sidebarSlice";
import phnSidebarReducer from "../features/phnSidebarSlice";
import plansReducer from "../features/plansSlice";
import mentorReducer from "../features/scheduleSlice";
import chatReducer from "../features/chatSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
    animation: animationReducer,
    sidebar: sidebarReducer,
    phnSidebar: phnSidebarReducer,
    plans: plansReducer,
    mentor: mentorReducer,
    chat: chatReducer,
  },
});
