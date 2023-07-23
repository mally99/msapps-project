import { Headers } from "../types";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const headers: Headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

export const fetchData = async (url: string) => {
    url = `${BASE_URL}${url}`;
    try {
        let res = await fetch(url, { method: "GET", headers })
        const response = (await res.json());
        return response;
    }
    catch (e) {
        console.error(`[Error] GET ${url}`, e);
        throw e;
    }
}

export const getImagesByCategoryAndPageIndex = (category: string, pageIndex: number) => {
    const url = `/api/images/${category}/${pageIndex}`;
    return fetchData(url)
}