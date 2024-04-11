// server.js

import express from "express";
import dotenv from "dotenv";
import "./db-connect.js";
import gamesRouter from "./routes/gamesRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());

// ______________ROUTES______________

app.use("/games", gamesRouter);

//______________PORT & LISTEN______________
const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

