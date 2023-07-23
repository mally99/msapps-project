import React from "react";
import { ImageList as MuiImageList, ImageListItem } from "@mui/material";
import { ItemResponse } from "../../../types";

export type IImageList = {
    images: Array<ItemResponse>;
}

export const ImageList = ({ images }: IImageList) => (
    <MuiImageList cols={3} sx={{ width: "80%" }} rowHeight={200}>
        {images?.map((value, index) => (
            <ImageListItem key={`${value.src}${index}`}>
                <img src={value.src} style={{ width: "100%", height: "200px", objectFit: "cover" }} alt={value.alt} />
            </ImageListItem>
        ))}
    </MuiImageList>);
