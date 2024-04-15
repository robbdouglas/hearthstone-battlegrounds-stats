import express from "express";
import { register } from "../controllers/usersControllers.js";

const usersRouter = express.Router();

usersRouter.post("/register", register);

export default usersRouter;