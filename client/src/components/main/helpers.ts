import { IImage } from "../image/Image";
import { IImageResponse } from "./types";

export const arrangeImages = (items: Array<IImageResponse>): Array<IImage> => {
    return items?.map((value) => {
        return {
            src: value.previewURL,
            alt: value.tags
        }
    })
}