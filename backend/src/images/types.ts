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
export type IImages = {
    total: number,
    totalHits: number,
    hits: Array<IImage>
}
export type IImage = {
    id: number,
    pageURL: string,
    type: string,
    tags: string,
    previewURL: string,
    previewWidth: number,
    previewHeight: number,
    webformatURL: string,
    webformatWidth: number,
    webformatHeight: number,
    largeImageURL: string,
    imageWidth: number,
    imageHeight: number,
    imageSize: number,
    views: number,
    downloads: number,
    collections: number,
    likes: number,
    comments: number,
    user_id: number,
    user: string,
    userImageURL: string
}