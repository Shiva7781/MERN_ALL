import { Routes, Route } from "react-router-dom";
import "./App.css";
import EditPost from "./components/EditPost";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
