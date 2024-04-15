// server.js

import express from "express";
import dotenv from "dotenv";
import "./db-connect.js";
import gamesRouter from "./routes/gamesRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

const allowedOrigins = [
  "https://hearthstone-battlegrounds-stats.onrender.com",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost/*",
];

// ______________CORS______________

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin:", origin);
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// ______________MIDDLEWARE______________

// Middleware to log the method and path of each request, and the body of POST requests
app.use((req, res, next) => {
  console.log(`current request infos: ${req.method}  ${req.path}`);
  if (req.method !== "GET") {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
  }
  console.log("\n");
  next();
});

// ______________ROUTES______________

app.use("/games", gamesRouter);
app.use("/users", usersRouter);

//______________PORT & LISTEN______________
const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
