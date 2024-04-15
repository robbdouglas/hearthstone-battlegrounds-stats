import { Users } from "../models/usersModel.js";
import bcrypt from "bcrypt";

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

export { register };
