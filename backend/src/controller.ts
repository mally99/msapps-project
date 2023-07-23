import { Request, Response } from "express";
import { getImages } from "./service";

export const getImagesController = async (req: Request, res: Response) => {
    (async () => {
        const { category, pageIndex } = req.params;
        // validate category and pageIndex
        if (!category || pageIndex === undefined) {
            res.status(500).send("category and pageIndex required");
        }
        try {
            const images = await getImages(category, +pageIndex);
            if (images) {
                res.status(200).send(images);
            } else {
                res.status(404).send("item not found");
            }
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    })();
};