import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
//
import { dispatch } from '../store';

const initialState = {
  mode: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;

export default slice.reducer;

export function setThemeAction(mode: PaletteMode) {
  dispatch(setTheme(mode));
}
