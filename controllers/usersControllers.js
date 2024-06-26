// usersControllers.js

import { Users } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUser = {
      username,
      hashedPassword,
    };
    const userExists = await Users.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    await Users.create(newUser);
    delete newUser.hashedPassword;
    res.status(200).json({
      message: "New User added! 🐒",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await Users.findOne({ username });
    if (!foundUser) {
      return res.status(404).json({ message: "Wrong username or password!" });
    }
    const passwordsMatched = await bcrypt.compare(password, foundUser.hashedPassword);
    if (!passwordsMatched) {
      return res.status(401).json({ message: "Wrong username or password!" });
    }
    const user = foundUser.toObject();
    delete user.hashedPassword;
    const payload = { userID: user._id };
    const token = jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: "1h",
    });
    console.log("token", token);
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "User logged in successfully!", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({ message: "logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { register, login, logout };
