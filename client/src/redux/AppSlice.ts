import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImagesResponse } from "../types";

interface AppState {
    loading: boolean;
    images?: ImagesResponse;
    category: string;
    pageIndex: number;
}

const initialState: AppState = { loading: false, category: "", pageIndex: 0 }

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setImages: (state, action: PayloadAction<ImagesResponse>) => {
            state.images = action.payload;
        },
        setPageIndex: (state, action: PayloadAction<number>) => {
            state.pageIndex = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    }
})
export const { setLoading, setImages, setPageIndex, setCategory } = slice.actions;

export default slice.reducer