
import { configureStore } from '@reduxjs/toolkit';
import cellVisibilityReducer from '../redux/cellVisibilitySlice';

const appStore = configureStore({
    reducer: {
        cellVisibility: cellVisibilityReducer,
    },
});

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
