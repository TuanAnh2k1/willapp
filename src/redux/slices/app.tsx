import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface appState {
  Remember: boolean;
  Username: string;
  Password: string;
}

const initialState: appState = {
  Remember: false,
  Username: "",
  Password: "",
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    resetApp: () => {
      return initialState;
    },
    setRemember: (state, action: PayloadAction<boolean>) => {
      state.Remember = action.payload;
    },
    setLoginInformation: (state, action: PayloadAction<any>) => {
      state.Username = action.payload.username;
      state.Password = action.payload.password;
    },
    removeLoginInformation: (state) => {
      state.Username = "";
      state.Password = "";
    }
  },
});

export const {
  resetApp,
  setRemember,
  setLoginInformation,
  removeLoginInformation,
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;