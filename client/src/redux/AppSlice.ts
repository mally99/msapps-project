import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IImagesResponse } from "../components/main/types";
import { mockImages } from "./mockup";

interface appState {
    loading: boolean;
    images: IImagesResponse;
}

const initialState: appState = { loading: false, images: mockImages }

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setImages: (state, action: PayloadAction<IImagesResponse>) => {
            state.images = action.payload;
        }
    }
})
export const { setLoading, setImages } = slice.actions;

export default slice.reducer