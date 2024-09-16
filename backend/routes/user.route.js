import express from "express";
import {login,logout, register, updateProfile} from "../controllers/user.controller.js";
import isAuthencticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthencticated,updateProfile);

export default router;