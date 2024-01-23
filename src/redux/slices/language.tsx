// src/store/slices/language.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: 'vn', // Ngôn ngữ mặc định
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;
