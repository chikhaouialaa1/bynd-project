import * as mw from "../controllers/admin/articles";
import express from "express";

const router = express.Router();

const basePath = "/articles/";

router.get(`${basePath}:_id`, ...mw.read);
router.get(basePath, ...mw.list);
router.post(basePath, ...mw.create);
router.put(`${basePath}:_id`, ...mw.update);
router.delete(`${basePath}:_id`, ...mw._delete);

export default router;
