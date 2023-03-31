const express = require("express");
const app = express();
const path = require("path");

app.get("/", async (req, res) => {
  return res.sendFile(path.join(__dirname, "src/index.html"));
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`App is runnig on http://localhost:${port}`);
});

// ---------------socket.io-----------------
const io = require("socket.io")(server);

// create a new connection
io.on("connection", (socket) => {
  console.log("A user connected with socket.id:", socket.id);

  // when user leave
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("Client message:", msg);
  });

  // emit event
  socket.emit("server", "Received From Server");
  socket.emit("server2", "Received From Server2");
});
