import { Schema, Model } from "mongoose";

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
  password: {
    type: String,
    required: true,
  },
});

export const Users = Model("User", usersSchema);