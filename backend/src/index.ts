import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./router";

dotenv.config();

//app variables
const PORT = parseInt(process.env.PORT as string, 10);
const app = express();

//app configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/", router);


//server activation
app.listen(PORT, () => { });

