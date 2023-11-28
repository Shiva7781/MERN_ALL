import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io.connect("https://socket-y70f.onrender.com/");
const userName = nanoid(7);

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [serverUser, setServerUser] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);

  console.log("isUserTyping:", isUserTyping);

  useEffect(() => {
    socket.on("chat_message_Server", ({ msg, userName }) => {
      console.log("message, userName:", msg, userName);

      console.log("chat:", chat);
      setChat([...chat, { msg, userName }]);
    });

    socket.on("isTyping_response", ({ userName, isTyping }) => {
      console.log("isTyping_response:", { userName, isTyping });
      setServerUser(userName);
      setIsUserTyping(isTyping);
    });

    return () => {
      // prevent duplicates rendering the message
      socket.off("chat_message_Server");
      socket.off("isTyping_response");
    };
  });

  useEffect(() => {
    socket.emit("isTyping", { isTyping: message.length !== 0, userName });

    return () => {
      socket.off("isTyping_response");
    };
  }, [message]);

  const handleSend = (e) => {
    e.preventDefault();

    socket.emit("chat_message_client", { msg: message, userName });
    setMessage("");
  };
  // console.log('message:', message)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatty App</h1>

        {chat?.map((v, i) => {
          return (
            <div key={i}>
              <p>
                {v.msg} id: <span>{v.userName}</span>
              </p>
            </div>
          );
        })}

        {userName !== serverUser && isUserTyping ? <h6>{serverUser} is typing... </h6> : null}

        <form onSubmit={handleSend}>
          <input
            type="text"
            name="chat"
            placeholder="Type message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" disabled={!message}>
            Send
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
