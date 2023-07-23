export type IImagesResponse = {
    totalItems: number;
    pageIndex: number;
    category: string;
    items: Array<IImageResponse>
}
export type IImageResponse = {
    previewURL: string;
    tags: string
}