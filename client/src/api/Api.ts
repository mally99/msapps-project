import { setLoading } from "../redux/AppSlice"
import { store } from "../redux/store"
import { IHeaders } from "./types";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const headers: IHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

export const getAsync = async (url: string) => {
    url = `${BASE_URL}${url}`
    console.log(`[Request] GET ${url}`, { headers });
    try {
        setIsLoading(true);
        let res = await fetch(url, { method: "GET", headers })
        const response = (await res.json())
        console.log(`[Response] GET ${url}`, response);
        return response;
    }
    catch (e) {
        console.log(`[Error] GET ${url}`, e);
        throw e;
    }
    finally {
        setIsLoading(false);
    }
}

const setIsLoading = (flag: boolean) => store.dispatch(setLoading(flag));

export const getImagesByCategoryAndPageIndex = (category: string, pageIndex: number) => {
    const url = `/api/images/${category}/${pageIndex}`;
    return getAsync(url)
}