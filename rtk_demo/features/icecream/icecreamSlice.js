const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
