import express from "express";
import courses from "./courses/index.js";
import products from "./products/index.js";

const router = express.Router();

router.use('/courses',courses);
router.use('/products',products);

export default router;