const router = require("express").Router();
const UserModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  let { name, email, gender, password } = req.body;

  try {
    if (!name || !email || !gender || !password) {
      return res.status(420).json("All fiels required");
    }

    const emailExist = await UserModel.findOne({ email: req.body.email });
    if (emailExist) return res.status(420).json("Email already registered!");

    // Creating a new mongoose doc
    const newUser = new UserModel({
      name,
      email,
      gender,
      password: bcrypt.hashSync(password, 11),
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  try {
    if (!user) return res.status(401).json("User does not exist");

    // checking user password with hashed password stored in the database
    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    // console.log(validPassword);

    if (!validPassword) return res.status(401).json("Wrong Username/Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    // sending JWT with user data except password
    const { password, ...others } = user._doc;
    res.status(200).json({ accessToken, ...others });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
