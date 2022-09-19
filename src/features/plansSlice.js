import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
    removePlans: (state, action) => {
      state.plans = null;
    },
  },
});

export const { setPlans, removePlans } = plansSlice.actions;
export default plansSlice.reducer;
