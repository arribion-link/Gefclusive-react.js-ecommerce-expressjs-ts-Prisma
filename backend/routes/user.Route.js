import express from "express";
const userRouter = express.Router();
import {
    register_user,
    login_user,
    admin_user
} from "../src/controllers/user.Controller.js"

userRouter
    .post("/register", register_user)
    .post("/login", login_user)
    .post("/admin/login", admin_user);


export default userRouter;