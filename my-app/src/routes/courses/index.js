import express from "express";
import {createCourse,getCourses,getcourseById,updateById,deleteByID} from "../../controllers/index.js";
const router = express.Router();

router
.route("/")
.get(getCourses)
.post(createCourse);


router
.route("/:id")
.get(getcourseById)
.put(updateById)
.delete(deleteByID);

export default router;
