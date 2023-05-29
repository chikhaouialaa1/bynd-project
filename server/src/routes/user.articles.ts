import * as mw from "../controllers/user/user.articles";
import express from "express";

const router = express.Router();

const basePath = "/articles/";

router.get(`${basePath}:_id`, ...mw.read);
router.get(basePath, ...mw.list);
// router.get(basePath, ...mw.search);

export default router;
