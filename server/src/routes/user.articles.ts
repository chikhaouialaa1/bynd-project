import * as mw from "../controllers/admin/articles";
import express from "express";

const router = express.Router();

const basePath = "/articles/";

router.get(`${basePath}:_id`, ...mw.read);
router.get(basePath, ...mw.list);

export default router;
