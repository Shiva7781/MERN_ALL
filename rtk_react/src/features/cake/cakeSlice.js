import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

// What about the actions ?
// createSlice will automatically generate action creators with same name as the reducers function we have written, (ordered & restocked)

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },

    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
