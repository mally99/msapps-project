import React from "react";
import { ImageList as MuiImageList, ImageListItem } from "@mui/material";
import { ItemResponse } from "../../../types";
import { ImageModal } from "../imageModal/ImageModal";

type ImageListType = {
    images: Array<ItemResponse>;
}

export const ImageList = ({ images }: ImageListType) => (
    <MuiImageList cols={3} sx={{ width: "80%" }} rowHeight={200}>
        {images?.map((value, index) => (
            <ImageListItem key={`${value.src}${index}`}>
                <ImageModal src={value.src} alt={value.alt} />
            </ImageListItem>
        ))}
    </MuiImageList>);
