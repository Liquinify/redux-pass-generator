import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;
export const passwordReducer = passwordSlice.reducer;
