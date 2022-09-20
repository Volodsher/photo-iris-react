import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  payload: null,
};

const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    openConfirm: (state, action) => {
      state.isOpen = true;
      state.payload = action.payload;
    },
    closeConfirm: (state, action) => {
      state.isOpen = false;
      state.payload = null;
    },
  },
});

export const { openConfirm, closeConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
