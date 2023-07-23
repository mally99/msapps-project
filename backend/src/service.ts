import { ItemResponse, PixabayImages, ImagesResponse } from "./types";

let allImages: PixabayImages | undefined = undefined;
let currentCategory: string;
const limit = 9;
const baseUrl = "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=";

const fetchImages = async (category: string) => {
    //fetch images from pixabay
    try {
        const response = await fetch(`${baseUrl}${category}`)
        const parsedImages = await response.json() as PixabayImages;
        return parsedImages;
    }
    catch (error: any) {
        console.error(error.response.body);
    }
}

const getImagesByLimit = (category: string, pageIndex: number): ImagesResponse => {
    currentCategory = category;
    const totalItems = allImages?.hits.length || 0;
    const fromIndex = pageIndex * limit;
    const toIndex = fromIndex + 9;
    //find the relevant 9 items
    const items: Array<ItemResponse> = allImages?.hits.slice(fromIndex, toIndex).map(temp => {
        return { src: temp.previewURL, alt: temp.tags }
    }) || []
    return { pageIndex, category, totalItems, items };
}

export const getImages = async (category: string, pageIndex: number): Promise<ImagesResponse> => {
    //fetch new images if allImages empty or category changed
    if (!allImages || currentCategory !== category)
        allImages = (await fetchImages(category));
    return getImagesByLimit(category, pageIndex);
}

