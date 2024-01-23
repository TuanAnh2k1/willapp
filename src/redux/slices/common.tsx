import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface commonState {
  alert?: string;
}

const initialState: commonState = {
  alert: undefined,
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    resetCommon: () => {
      return initialState;
    },
    setAlert: (state, action: PayloadAction<string>) => {
      state.alert = action.payload;
    },
  },
});

export const {
  resetCommon,
  setAlert,
} = commonSlice.actions;

export const selectCommon = (state: RootState) => state.common;

export default commonSlice.reducer;