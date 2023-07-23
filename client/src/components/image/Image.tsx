import React from "react"

export type IImage = {
    src?: string;
    alt?: string;
    className?: string
}
export const Image = ({ src, alt, className }: IImage) => {
    return <img
        src={src}
        alt={alt}
        className={className}
    />

}