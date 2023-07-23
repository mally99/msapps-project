import express, { Request, Response } from "express";
import * as service from "./service";

export const imagesRouter = express.Router();

imagesRouter.get("/:category/:pageIndex", async (req: Request, res: Response) => {
    const category = req.params.category;
    const pageIndex = parseInt(req.params.pageIndex, 10);
    try {
        const images = await service.getImages(category, pageIndex)
        if (images) {
            return res.status(200).send(images);
        }
        res.status(404).send("item not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});