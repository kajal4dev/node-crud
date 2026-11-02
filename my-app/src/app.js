import express from "express";
import apiRoute from "./routes/index.js";

const app =express();
app.use(express.json());
app.use("/api/v1",apiRoute);

export default app;