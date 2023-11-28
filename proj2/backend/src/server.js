const app = require("express")();
const server = require("node:http").createServer(app);
const io = require("socket.io")(server, {
    cors: { origin: "*" },
});

app.get("/", (req, res) => {
    res.send("<h1>This is home page</h1>");
});

io.on("connection", (socket) => {
    // console.log("this is socket:", socket);
    console.log("Socket is active to be connected!");

    socket.on("chat_message_client", (payload) => {
        console.log("chat_message_client:", payload);

        io.emit("chat_message_Server", payload);
    });

    socket.on("isTyping", ({ userName, isTyping }) => {
        console.log("isTyping:", { userName, isTyping });

        io.emit("isTyping_response", { userName, isTyping });
    });
});

const port = process.env.PORT || 7781;
server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
