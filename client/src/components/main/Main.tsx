import React, { useState } from "react";
import { strings } from "../../assets/strings";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { Text } from "../ui/text/Text";
import { Button } from "../ui/button/Button";
import { TextField } from "../ui/textField/TextField";
import { ImageList } from "../ui/imageList/ImageList";
import { setCategory, setPageIndex } from "../../redux/AppSlice";
import Stack from "@mui/material/Stack";

export const Main = () => {
    const { images, category, loading } = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();
    const [tempCategory, setTempCategory] = useState("");
    const items = images?.items;
    const currentPageIndex = images?.pageIndex;
    const totalItems = images?.totalItems;
    const disablePrev = currentPageIndex === undefined || currentPageIndex <= 0 || !category;
    const disableNext = currentPageIndex === undefined || totalItems === undefined ||
        Math.floor(totalItems / 9) <= currentPageIndex || !category;

    const onClickPrev = () => {
        currentPageIndex !== undefined && dispatch(setPageIndex(currentPageIndex - 1))
    }
    const onClickNext = () => {
        currentPageIndex !== undefined && dispatch(setPageIndex(currentPageIndex + 1))
    }
    const onSearch = () => {
        dispatch(setCategory(tempCategory));
        dispatch(setPageIndex(0));
    }

    return <Stack alignItems="center" p="30px">
        <Stack direction="row" justifyContent="space-between" width="100%">
            <Button onClick={onClickPrev} text={strings.prev} disabled={disablePrev} />
            <TextField value={tempCategory} onChange={setTempCategory} label={strings.category}
                onClickIcon={onSearch} isSearch />
            <Button text={strings.next} onClick={onClickNext} disabled={disableNext} />
        </Stack>
        {items?.length ? <ImageList images={items} /> :
            (!loading && <Text text={`${strings.noItems}${category}`} />)}
    </Stack>
}