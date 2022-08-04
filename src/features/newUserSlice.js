import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: null,
};

export const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    create: (state, action) => {
      state.newUser = action.payload;
    },
    // modify: (state, action) => {
    //   return {...state, action.payload}
    // },
    remove: (state, action) => {
      state.newUser = null;
    },
  },
});

export const { create, remove } = newUserSlice.actions;
export const selectNewUser = (state) => state.newUser.newUser;

export default newUserSlice.reducer;
