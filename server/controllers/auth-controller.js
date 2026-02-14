const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const STATUS = require("../utils/status-code");
const User = require("../models/user-model");

// register controller
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //basic validation
    if (!username || !email || !password) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: "All fileds are required" });
    }

    //    check user is already register
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(STATUS.OK).json({ message: "User already registered" });
    }

    //    create a new user with encrypt password using bcrypt

    const salt = 10;
    const hash_password = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hash_password,
    });
    // newuser data
    const data = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
    };

    //create the auth token using jwt
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, role: newUser.role },
      process.env.SECRET_KEY,
      { expiresIn: "1d" },
    );

    // send server response
    res
      .status(STATUS.CREATED)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ message: "Register successful", data: data });
  } catch (error) {
    return res
      .status(STATUS.SERVER_ERROR)
      .json({ message: "Internal server error", error: error.message });
  }
};

// login controller

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // basic validation
    if (!email || !password) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: "ALl fields are required" });
    }
    // check user is exist or not
    const existUser = await User.findOne({ email }).select("+password");
    if (!existUser) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: "User not register" });
    }

    //login logic using bcrypt compare method

    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: "Invalid Credintials" });
    }

    const loginData = {
      id: existUser._id,
      username: existUser.username,
      email: existUser.email,
      role: existUser.role,
    };

    // genrate token
    const token = jwt.sign(
      {
        id: existUser._id,
        username: existUser.username,
        email: existUser.email,
        role: existUser.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" },
    );

    return res
      .status(STATUS.OK)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ message: "Login successful", data: loginData });
  } catch (error) {
    return res
      .status(STATUS.SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

//logout logic controller

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

//get logged user data

const getMe = (req, res) => {
  try {
    // Auth middleware already req.user set karta hai
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { register, login, logout, getMe };
