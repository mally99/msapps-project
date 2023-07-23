import React from "react";
import { IImage, Image } from "../image/Image";
import styles from "./ImageList.module.scss"
import { ImageList as MuiImageList, ImageListItem } from "@mui/material";
import { ClassNames } from "@emotion/react";

export type IImageList = {
    images?: Array<IImage>;
    className?: string;
}

export const ImageList = ({ images = [], className }: IImageList) => {
    return (
        <MuiImageList className={className} cols={3}>
            {images?.map((value, index) => (
                <ImageListItem key={index}>
                    <Image src={value.src} alt={value.alt} className={styles.image} />
                </ImageListItem>
            ))}
        </MuiImageList>
    );
}