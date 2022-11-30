import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        suscriptor: [],
        isSubmit: false
    },
    reducers: {
        formSubmit: (state, /* action */ ) => {
            state.isSubmit = true;
        },
    }
});
// Action creators are generated for each case reducer function
export const { formSubmit } = formSlice.actions;