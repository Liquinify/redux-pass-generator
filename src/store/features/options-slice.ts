import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lowerCase: false,
  upperCase: false,
  numbers: false,
  symbols: false,
  passwordLength: 4
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setLowerCase: (state) => {
      state.lowerCase = !state.lowerCase;
    },
    setUpperCase: (state) => {
      state.upperCase = !state.upperCase;
    },
    setNumbers: (state) => {
      state.numbers = !state.numbers;
    },
    setSymbols: (state) => {
      state.symbols = !state.symbols;
    },
    setPasswordLength: (state, action) => {
      state.passwordLength = action.payload
    }
  },
});

export const { setLowerCase, setUpperCase, setNumbers, setSymbols, setPasswordLength } = optionsSlice.actions;
export const optionsReducer = optionsSlice.reducer;



