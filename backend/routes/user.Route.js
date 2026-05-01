import express from "express";
const userRouter = express.Router();
import {
  regiter_user,
  login_user,
  refreshToken
} from "../src/controllers/user.Controller.js";

userRouter
  .post("/register", regiter_user)
  .post("/login", login_user)
  .post("/resfresh", refreshToken)
  // .post("/admin/login", admin_user);


export default userRouter;