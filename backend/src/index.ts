import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { imagesRouter } from "./images/router";

dotenv.config();

// App Variables
const app = express();

// App Configuration

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/images/", imagesRouter);
