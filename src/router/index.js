import { Router } from "express";
import views_router from "./views/index.js"

const router = Router();
//router.use('/api_router');
router.use("/", views_router);

export default router;