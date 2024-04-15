// usersRoutes.js

import express from "express";
import { register, login } from "../controllers/usersControllers.js";

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);

export default usersRouter;