const router = require("express").Router();
const PostModel = require("../models/posts.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Authenticator } = require("../middleware/Authenticator");

// Create
router.post("/", async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(" ")[1];

  if (!token) return res.status(403).json("Need login to create post");

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log("decoded:", decoded);

  req.body.loginId = decoded.id;
  req.body.loginEmail = decoded.email;

  const Post = req.body;
  try {
    const newPost = new PostModel(Post);
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Read
router.get("/", async (req, res) => {
  const { device1, device2, device3 } = req.query;
  const queryObject = {};
  if (device1) {
    queryObject.device = device1;
  }

  try {
    const Posts = await PostModel.find(queryObject);
    res.send(Posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Update
router.patch("/update/:id", Authenticator, async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    await PostModel.findByIdAndUpdate(id, payload);
    res.send("User data updated successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete
router.delete("/delete/:id", Authenticator, async (req, res) => {
  const id = req.params.id;

  try {
    await PostModel.findByIdAndDelete(id);
    res.send("Post has been deleted successfully!");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
