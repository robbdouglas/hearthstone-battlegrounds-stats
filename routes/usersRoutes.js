// usersRoutes.js

import express from "express";
import { register, login, logout } from "../controllers/usersControllers.js";

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/logout", logout);

export default usersRouter;
