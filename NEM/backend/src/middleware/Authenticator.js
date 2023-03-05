const PostModel = require("../models/posts.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authenticator = async (req, res, next) => {
  const id = req.params.id;
  const Post = await PostModel.findById(id);
  // console.log("Authenticator:", Post);

  const authHeader = req.headers.token;
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Authenticator:", decoded);

    if (!decoded) return res.status(403).json("Token is not valid");

    // console.log(Post.loginEmail, decoded.email);
    // console.log(Post.loginId, decoded.id);

    if (Post.loginId === decoded.id) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { Authenticator };
