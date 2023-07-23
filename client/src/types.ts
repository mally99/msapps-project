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
export type Headers = {
    "Accept": string;
    "Content-Type": string;
    "Authorization"?: string;
}; 