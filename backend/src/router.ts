import express from "express";
import { getImagesController } from "./controller";

export const router = express.Router();
export const imagesRrouter = express.Router();

router.get("/images/:category/:pageIndex", getImagesController);