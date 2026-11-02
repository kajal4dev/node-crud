import express from "express";
const router = express.Router();
import {signUp,login} from "../../controllers/index.js";
import {createEmployee,getEmployeeById,updateEmployeeById,deleteEmployeeById} from "../../controllers/index.js";
import authMiddleware from "../../middleware/authmiddleware.js";

router.post("/",authMiddleware,createEmployee);
router.get("/:id",authMiddleware,getEmployeeById);
router.put("/:id",authMiddleware,updateEmployeeById);
router.delete("/:id",authMiddleware,deleteEmployeeById);

router.post("/signup",signUp);

router.post("/login",login);

export default router;