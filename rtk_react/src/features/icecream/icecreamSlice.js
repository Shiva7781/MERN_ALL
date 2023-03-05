import { createSlice } from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIcecreams: 20,
};

// What about the actions ?
// createSlice will automatically generate action creators with same name as the reducers function we have written, (ordered & restocked)

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },

    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },

  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIcecreams--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
