const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/users.routes");
const postsRoute = require("./routes/posts.routes");

// to see if frontend and backend are connected
app.get("/check", async (req, res) => {
  return res.send("success!");
});

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

module.exports = app;
