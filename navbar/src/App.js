import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  let User = false;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={User ? <Home /> : <Navigate to="/signup" />} />
        <Route
          path="/about"
          element={User ? <About /> : <Navigate to="/signup" />}
        />
        <Route
          path="/signup"
          element={User ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/login" element={User ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
