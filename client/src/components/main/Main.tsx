import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss"
import { ImageList } from "../imageList/ImageList";
import { Button } from "../button/Button";
import { strings } from "../../assets/strings";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { arrangeImages } from "./helpers";
import { TextField } from "../textField/TextField";
import { Text } from "../text/Text";

export type IMain = {
    setPageIndex?: Function;
    setCategory?: Function;
    category?: string;
    pageIndex?: number
}
export const Main = ({ setPageIndex = () => { }, setCategory = () => { }, category }: IMain) => {
    const { images } = useAppSelector(state => state.app);
    const [tempCategory, setTempCategory] = useState("");
    const items = images?.items;
    const currentPageIndex = images?.pageIndex;
    const totalItems = images?.totalItems;
    const data = items?.length ? arrangeImages(items) : undefined;

    return <div className={styles.container}>
        <div className={styles.buttons}>
            <Button onClick={() => setPageIndex(currentPageIndex - 1)} text={strings.prev} disabled={currentPageIndex <= 0 || !category} />
            <TextField value={tempCategory} onChange={setTempCategory} label={strings.category} onClickIcon={() => { setCategory(tempCategory); setPageIndex(0) }} isSearch />
            <Button text={strings.next} onClick={() => setPageIndex(currentPageIndex + 1)} disabled={parseInt(`${totalItems / 9}`) <= currentPageIndex || !category} />
        </div>
        {items?.length ? <ImageList images={data} className={styles.imageList} /> :
            <Text text={`${strings.noItems}${category}`} />}
    </div>
}