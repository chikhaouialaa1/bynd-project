import * as mw from "../controllers/auth/auth";
import express from "express";

const router = express.Router();

const basePath = "/";

router.post(`${basePath}sign-in`, ...mw.signin);
router.post(`${basePath}register`, ...mw.register);

export default router;
