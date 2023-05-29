import express from "express";
import authRouter from "./routes/auth";
import adminArticlesRouter from "./routes/admin.articles";
import userArticlesRouter from "./routes/user.articles";
import { checkToken } from "./middleware/auth";

const root = express.Router();

root.use("/auth", authRouter);
root.use("/admin", checkToken, adminArticlesRouter);
root.use("/user", checkToken, userArticlesRouter);

export default root;
