import { useEffect } from "react";
import { fetchData } from "../api/Api";
import { ImagesResponse } from "../types";
import { setImages, setLoading } from "../redux/AppSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useFetchImages = () => {
    const { category, pageIndex } = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();
    const setIsLoading = (flag: boolean) => dispatch(setLoading(flag));

    useEffect(() => {
        if (pageIndex !== undefined && category) {
            (async () => {
                try {
                    setIsLoading(true)
                    const data: ImagesResponse = await fetchData(`/api/images/${category}/${pageIndex}`);
                    dispatch(setImages(data))
                }
                catch (error) {
                    console.error(error)
                }
                finally {
                    setIsLoading(false)
                }
            })()
        }
    }, [category, pageIndex]);
}

