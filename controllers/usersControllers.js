import User from "../models/usersModel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUser = {
      userName,
      hashedPassword,
    };
    const userExists = await User.findOne({ userName });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    await User.create(newUser);
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
