import express from "express";
import courses from "./courses/index.js";
import products from "./products/index.js";
import authRoutes from "./authRoutes/auth.route.js";

const router = express.Router();

router.use('/courses',courses);
router.use('/products',products);
router.use("/",authRoutes);
export default router;