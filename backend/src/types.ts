export type ImagesResponse = {
    totalItems: number;
    pageIndex: number;
    category: string;
    items: Array<ItemResponse>
}
export type ItemResponse = {
    src: string;
    alt: string
}
export type PixabayImages = {
    total: number;
    totalHits: number;
    hits: Array<Hit>;
}
export type Hit = {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    collections: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string
}

