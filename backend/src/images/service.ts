import { IImageResponse, IImages, IImagesResponse } from "./types";

let allImages: IImages | undefined = undefined;
let selectedCategory = "";

const fetchImages = async (category: string) => {
    //fetch images from pixabay
    try {
        const response = await fetch(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`)
        return await response.json() as IImages;
    }
    catch (error: any) {
        console.log(error.response.body);
    }
}

export const getImages = async (category: string, pageIndex: number): Promise<IImagesResponse> => {
    if (!process.env.LIMIT) {
        process.exit(1);
    }
    //fetch new images if allImages empty or category changed
    if (!allImages || selectedCategory !== category)
        allImages = (await fetchImages(category));
    selectedCategory = category;
    const totalItems = allImages?.hits.length || 0
    const limit = parseInt(process.env.LIMIT as string, 10);
    const items: Array<IImageResponse> = []
    const fromIndex = pageIndex * limit;
    const toIndex = fromIndex + 9;
    //find the relevant 9 items
    for (let i = pageIndex * limit; i < toIndex && i < totalItems; i++) {
        const temp = allImages?.hits[i]
        temp && items.push({ previewURL: temp.previewURL, tags: temp.tags })
    }
    return { pageIndex, category, totalItems, items };
}
