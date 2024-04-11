// gamesRoutes.js

import express from "express";
import { getAllGames, createGame } from "../controllers/gamesControllers.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames).post("/add", createGame);

export default gamesRouter;
