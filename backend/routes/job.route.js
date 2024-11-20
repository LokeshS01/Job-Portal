import express from "express";
import isAuthencticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAlljobs, getjobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthencticated, postJob);
router.route("/get").get(isAuthencticated, getAlljobs);
router.route("/getadminjobs").get(isAuthencticated, getAdminJobs);
router.route("/get/:id").get(isAuthencticated, getjobById);

export default router;