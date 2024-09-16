import express from "express";
import isAuthencticated from "../middlewares/isAuthenticated.js";
import { getCompany,getCompanyById,registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthencticated,registerCompany);
router.route("/get").get(isAuthencticated,getCompany);
router.route("/get/:id").get(isAuthencticated,getCompanyById);
router.route("/update/:id").put(isAuthencticated,updateCompany);

export default router;