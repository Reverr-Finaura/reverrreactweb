import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mentor: null,
};

export const mentorSlice = createSlice({
  name: "mentor",
  initialState,
  reducers: {
    setScheduleMentor: (state, action) => {
      state.mentor = action.payload;
    },
    removeMentor: (state) => {
      state.mentor = null;
    },
  },
});

export const { setScheduleMentor, removeMentor } = mentorSlice.actions;
export const selectMentor = (state) => state.mentor.mentor;

export default mentorSlice.reducer;
