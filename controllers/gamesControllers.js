// gamesControllers.js

import { Games } from "../models/gamesModel.js";

export const getAllGames = async (req, res) => {
  try {
    const games = await Games.find();
    res.json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const createGame = async (req, res) => {
  try {
    const newGame = new Games(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};
