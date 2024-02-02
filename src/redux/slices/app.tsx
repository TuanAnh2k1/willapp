import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface appState {
  Remember: boolean;
  Username: string;
  Password: string;
  Birthday?: Date;
  TimeNotice?: Date;
}

const initialState: appState = {
  Remember: false,
  Username: "",
  Password: "",
  Birthday: undefined,
  TimeNotice: undefined,
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
      state.Birthday = action.payload.birthday;
    },
    setTimeNotice: (state, action: PayloadAction<any>) => {
      state.TimeNotice = action.payload;
    },
    removeLoginInformation: (state) => {
      state.Username = "";
      state.Password = "";
      state.Birthday = undefined;
    },
    removeTimeNotice: (state) => {
      state.Birthday = undefined;
      state.TimeNotice = undefined;
    }
  },
});

export const {
  resetApp,
  setRemember,
  setLoginInformation,
  removeLoginInformation,
  setTimeNotice,
  removeTimeNotice
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;