import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { GlobalCache } from '@utils';

export interface userState {
  EmployeeID?: number;
  Name: string;
}

const initialState: userState = {
  EmployeeID: undefined,
  Name: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUser: () => {
      return initialState;
    },
    setUserInformation: (state, action: PayloadAction<any>) => {
      state.EmployeeID = action.payload.Employee.EMPLOYEE_ID;
      state.Name = action.payload.Employee.NAME;
      GlobalCache.UserToken = action.payload.UserToken;
    },
  },
});

export const {
  resetUser,
  setUserInformation,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;