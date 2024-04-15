// usersModel.js

import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 15,
  },
  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //   },
  hashedPassword: {
    type: String,
    required: true,
  },
});

export const Users = model("User", usersSchema);
