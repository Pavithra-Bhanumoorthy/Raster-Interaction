// src/features/cellVisibilitySlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellVisibilityState } from '../interface/List';
import { RootState } from '../redux/appStore';


const initialState:CellVisibilityState = {
    visibility: {}, // To track visibility of each cell
    hoveredCell: null, // To track which cell is currently hovered
};


const cellVisibilitySlice = createSlice({
    name: 'cellVisibility',
    initialState,
    reducers: {
        toggleCell: (state, action:PayloadAction<number>) => {
            const cellId = action.payload;
            state.visibility[cellId] = !state.visibility[cellId]; // Toggle visibility
        },
        setCells: (state, action:PayloadAction<{id: number}[]>) => {
            // Set all cells to visible by default
            action.payload.forEach(cell => {
                state.visibility[cell.id] = true;
            });
        },
        setHoveredCell: (state, action:PayloadAction<number | null>) => {
            state.hoveredCell = action.payload; // Set the hovered cell
        },
        clearHoveredCell: (state) => {
            state.hoveredCell = null; // Clear the hovered cell
        },
    },
});

export const selectVisibility = (state:RootState) => state.cellVisibility.visibility;
export const selectHoveredCell = (state:RootState) => state.cellVisibility.hoveredCell;

export const { toggleCell, setCells, setHoveredCell, clearHoveredCell } = cellVisibilitySlice.actions;
export default cellVisibilitySlice.reducer;
