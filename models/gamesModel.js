// gamesModel.js

import { Schema, model } from "mongoose";

const gamesSchema = new Schema({
  playerName: {
    type: String,
    required: true,
  },
  placement: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  hero: {
    type: String,
    required: true,
  },
  tribe: {
    type: String,
    required: true,
  },
  quest: {
    type: String,
    required: true,
  },
});

export const Games = model("Game", gamesSchema);
